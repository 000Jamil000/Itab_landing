#!/bin/bash

# Скрипт деплоя iTAB Landing на сервер через Git
# Использование: ./deploy.sh
#
# ВАЖНО: Для работы скрипта нужно настроить SSH-ключи:
#   ssh-copy-id root@88.210.53.64
#
# Или использовать переменную окружения:
#   export ITAB_SERVER_PASSWORD="your_password"
#   ./deploy.sh

set -e

# Конфигурация
SERVER_IP="88.210.53.64"
SERVER_USER="root"
PROJECT_NAME="itab-landing"
PROJECT_DIR="/opt/${PROJECT_NAME}"
DOMAIN="supplier.itab.pro"
GIT_REPO="git@github.com:000Jamil000/Itab_landing.git"

# Функция для выполнения SSH команд
ssh_exec() {
    ssh -o StrictHostKeyChecking=no "${SERVER_USER}@${SERVER_IP}" "$@"
}

echo "🚀 Начинаем деплой iTAB Landing на ${DOMAIN}..."

# 1. Проверить, что все изменения закоммичены
echo ""
echo "📝 Шаг 1: Проверка Git статуса..."
if [[ -n $(git status --porcelain) ]]; then
    echo "⚠️  Обнаружены незакоммиченные изменения:"
    git status --short
    echo ""
    read -p "Закоммитить изменения? (y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        read -p "Введите commit message: " COMMIT_MSG
        git add .
        git commit -m "$COMMIT_MSG"
    else
        echo "❌ Отмена деплоя. Сначала закоммитьте изменения."
        exit 1
    fi
fi

# 2. Запушить в GitHub
echo ""
echo "📤 Шаг 2: Push в GitHub..."
CURRENT_BRANCH=$(git branch --show-current)
git push origin "$CURRENT_BRANCH"
echo "✅ Изменения запушены в GitHub!"

# 3. Подключиться к серверу и обновить код
echo ""
echo "🔄 Шаг 3: Обновление кода на сервере..."
ssh_exec << ENDSSH
# Проверить, существует ли директория проекта
if [ ! -d "${PROJECT_DIR}" ]; then
    echo "📁 Клонируем репозиторий впервые..."
    cd /opt
    git clone ${GIT_REPO} ${PROJECT_NAME}
    cd ${PROJECT_DIR}
else
    echo "📦 Подтягиваем последние изменения..."
    cd ${PROJECT_DIR}
    git fetch --all
    git reset --hard origin/${CURRENT_BRANCH}
    git pull origin ${CURRENT_BRANCH}
fi

echo "✅ Код обновлён!"
ENDSSH

# 4. Собрать и запустить Docker на сервере
echo ""
echo "🐳 Шаг 4: Сборка и запуск Docker контейнера..."
ssh_exec << 'ENDSSH'
cd /opt/itab-landing

# Остановить старый контейнер (если есть)
docker compose down 2>/dev/null || true

# Собрать и запустить новый
docker compose up -d --build

# Проверить статус
docker compose ps

echo ""
echo "✅ Docker контейнер запущен!"
ENDSSH

# 5. Настроить Nginx (если еще не настроен)
echo ""
echo "🌐 Шаг 5: Проверка конфигурации Nginx..."
ssh_exec << 'ENDSSH'
# Проверить, существует ли конфиг
if [ ! -f /etc/nginx/sites-available/itab-landing ]; then
    echo "📝 Создаем конфигурацию Nginx..."
    
    # Копировать конфиг из проекта
    cp /opt/itab-landing/deploy/nginx/supplier.itab.pro.conf /etc/nginx/sites-available/itab-landing
    
    # Создать симлинк
    ln -sf /etc/nginx/sites-available/itab-landing /etc/nginx/sites-enabled/
    
    # Проверить синтаксис
    nginx -t
    
    # Перезагрузить Nginx
    systemctl reload nginx
    
    echo "✅ Nginx настроен!"
else
    echo "ℹ️  Конфигурация Nginx уже существует"
    
    # Обновить конфиг
    cp /opt/itab-landing/deploy/nginx/supplier.itab.pro.conf /etc/nginx/sites-available/itab-landing
    
    # Проверить и перезагрузить
    nginx -t && systemctl reload nginx
fi
ENDSSH

# 6. Настроить SSL (если еще не настроен)
echo ""
echo "🔒 Шаг 6: Проверка SSL сертификата..."
ssh_exec << 'ENDSSH'
# Проверить, установлен ли certbot
if ! command -v certbot &> /dev/null; then
    echo "📦 Устанавливаем certbot..."
    apt update
    apt install -y certbot python3-certbot-nginx
fi

# Проверить, существует ли сертификат
if [ ! -d "/etc/letsencrypt/live/supplier.itab.pro" ]; then
    echo "📜 Получаем SSL сертификат..."
    certbot --nginx -d supplier.itab.pro --non-interactive --agree-tos --email admin@itab.pro
    echo "✅ SSL сертификат установлен!"
else
    echo "ℹ️  SSL сертификат уже установлен"
fi
ENDSSH

# 7. Проверить статус
echo ""
echo "🔍 Шаг 7: Проверка статуса..."
ssh_exec << 'ENDSSH'
echo "📊 Docker контейнеры:"
docker ps | grep itab-landing || echo "⚠️  Контейнер не найден"

echo ""
echo "📊 Nginx статус:"
systemctl status nginx --no-pager | head -n 5

echo ""
echo "📊 Занятые порты:"
netstat -tuln | grep :4000 || echo "⚠️  Порт 4000 не занят"
ENDSSH

# 8. Финальная проверка
echo ""
echo "=========================================="
echo "✅ Деплой завершен!"
echo "=========================================="
echo ""
echo "🌐 Сайт доступен по адресу:"
echo "   https://supplier.itab.pro"
echo ""
echo "🐳 Docker контейнер: itab-landing"
echo "📍 Директория: /opt/itab-landing"
echo "🔌 Порт: 4000"
echo ""
echo "📝 Полезные команды:"
echo "   ssh root@88.210.53.64 'docker compose -f /opt/itab-landing/docker-compose.yml logs -f'"
echo "   ssh root@88.210.53.64 'docker compose -f /opt/itab-landing/docker-compose.yml restart'"
echo "   ssh root@88.210.53.64 'systemctl reload nginx'"
echo ""
echo "🔍 Проверьте сайт:"
echo "   curl -I https://supplier.itab.pro"
echo ""

