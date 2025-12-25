#!/bin/bash

# Скрипт деплоя iTAB Landing на сервер
# Использование: ./deploy.sh

set -e

# Конфигурация
SERVER_IP="88.210.53.64"
SERVER_USER="root"
SERVER_PASSWORD="f6_64R56ENhKmfG1B4jF"
PROJECT_NAME="itab-landing"
PROJECT_DIR="/opt/${PROJECT_NAME}"
DOCKER_PORT="4000"
DOMAIN="supplier.itab.pro"

# Проверить наличие sshpass
if ! command -v sshpass &> /dev/null; then
    echo "❌ Ошибка: sshpass не установлен"
    echo "📦 Установите его:"
    echo "   macOS: brew install hudochenkov/sshpass/sshpass"
    echo "   Linux: apt-get install sshpass"
    echo ""
    echo "Или используйте SSH-ключи (рекомендуется):"
    echo "   ssh-copy-id ${SERVER_USER}@${SERVER_IP}"
    exit 1
fi

# Функция для выполнения SSH команд с паролем
ssh_exec() {
    sshpass -p "${SERVER_PASSWORD}" ssh -o StrictHostKeyChecking=no "${SERVER_USER}@${SERVER_IP}" "$@"
}

# Функция для rsync с паролем
rsync_exec() {
    sshpass -p "${SERVER_PASSWORD}" rsync -e "ssh -o StrictHostKeyChecking=no" "$@"
}

echo "🚀 Начинаем деплой iTAB Landing на ${DOMAIN}..."

# 1. Собрать проект локально
echo ""
echo "📦 Шаг 1: Сборка проекта..."
npm run build

# 2. Создать директорию на сервере
echo ""
echo "📁 Шаг 2: Создание директории на сервере..."
ssh_exec "mkdir -p ${PROJECT_DIR}"

# 3. Скопировать файлы на сервер
echo ""
echo "📤 Шаг 3: Копирование файлов..."
rsync_exec -avz --delete \
  --exclude 'node_modules' \
  --exclude '.git' \
  --exclude 'dist' \
  --exclude '.cursor' \
  --exclude '*.log' \
  ./ ${SERVER_USER}@${SERVER_IP}:${PROJECT_DIR}/

echo ""
echo "✅ Файлы скопированы!"

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

