#!/bin/bash

# Финальный скрипт деплоя после добавления GitHub Deploy Key
# Использование: ./finish-deploy.sh

set -e

SERVER_IP="88.210.53.64"
SERVER_USER="root"
PROJECT_DIR="/opt/itab-landing"
GIT_REPO="git@github.com:000Jamil000/Itab_landing.git"

echo "🚀 Финальный деплой iTAB Landing..."
echo ""

# Проверить, добавлен ли Deploy Key в GitHub
echo "⚠️  ВАЖНО: Убедитесь, что вы добавили Deploy Key в GitHub!"
echo "   Инструкция: см. файл GITHUB_DEPLOY_KEY.md"
echo ""
read -p "Deploy Key добавлен в GitHub? (y/n): " -n 1 -r
echo ""
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Сначала добавьте Deploy Key в GitHub (см. GITHUB_DEPLOY_KEY.md)"
    exit 1
fi

echo ""
echo "🔄 Шаг 1: Клонирование репозитория на сервер..."

ssh ${SERVER_USER}@${SERVER_IP} << ENDSSH
# Добавить GitHub в known_hosts
ssh-keyscan github.com >> ~/.ssh/known_hosts 2>/dev/null

# Клонировать репозиторий
if [ ! -d "${PROJECT_DIR}/.git" ]; then
    echo "📁 Клонируем репозиторий..."
    cd /opt
    rm -rf itab-landing
    git clone ${GIT_REPO} itab-landing
else
    echo "📦 Репозиторий уже существует, подтягиваем изменения..."
    cd ${PROJECT_DIR}
    git fetch --all
    git reset --hard origin/main
    git pull origin main
fi

echo "✅ Код обновлён!"
ENDSSH

echo ""
echo "🐳 Шаг 2: Сборка и запуск Docker..."

ssh ${SERVER_USER}@${SERVER_IP} << 'ENDSSH'
cd /opt/itab-landing

# Остановить старый контейнер
docker compose down 2>/dev/null || true

# Собрать и запустить
docker compose up -d --build

# Проверить статус
docker compose ps

echo ""
echo "✅ Docker контейнер запущен!"
ENDSSH

echo ""
echo "🌐 Шаг 3: Проверка Nginx..."

ssh ${SERVER_USER}@${SERVER_IP} << 'ENDSSH'
# Проверить, что конфиг существует
if [ ! -f /etc/nginx/sites-enabled/itab-landing ]; then
    echo "⚠️  Конфигурация Nginx не найдена"
    echo "📝 Создаём конфигурацию..."
    
    cp /opt/itab-landing/deploy/nginx/supplier.itab.pro.conf /etc/nginx/sites-available/itab-landing
    ln -sf /etc/nginx/sites-available/itab-landing /etc/nginx/sites-enabled/
    
    nginx -t && systemctl reload nginx
    echo "✅ Nginx настроен!"
else
    echo "✅ Nginx уже настроен"
fi
ENDSSH

echo ""
echo "=========================================="
echo "✅ Деплой завершён успешно!"
echo "=========================================="
echo ""
echo "🌐 Сайт доступен:"
echo "   https://supplier.itab.pro"
echo ""
echo "📊 Проверка:"
echo "   docker ps | grep itab-landing"
echo "   curl -I https://supplier.itab.pro"
echo ""
echo "📝 Логи:"
echo "   ssh root@88.210.53.64 'docker compose -f /opt/itab-landing/docker-compose.yml logs -f'"
echo ""

