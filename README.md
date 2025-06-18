# CODECRAFT

CODECRAFT — это интерактивная образовательная платформа для изучения IT-дисциплин. Проект ориентирован на поэтапное обучение с визуальным интерфейсом, современным стеком технологий и гибкой архитектурой. Он разрабатывается по спринтам с использованием GitHub Projects.

---

## 📌 О проекте

Платформа предназначена для предоставления интерактивных IT-курсов, в т.ч. с видео, тестами, задачами и личным прогрессом. В дальнейшем планируется:
- авторизация и ролевой доступ (студент/преподаватель/админ),
- личный кабинет,
- система прохождения заданий и оценки,
- аналитика и панель преподавателя,
- интеграция с внешними API (GitHub, Discord, Telegram, YouTube и т.д.).

---

## 🚀 Стек технологий

### Backend:
- **Python 3.11+**
- **Django** — основной фреймворк
- **Django REST Framework (DRF)** — API
- **PostgreSQL** — СУБД
- **django-cors-headers** — CORS для фронта

### Frontend:
- **Next.js 14+ (App Router)**
- **TypeScript**
- **Mantine UI** — UI-компоненты
- **@tabler/icons-react** — иконки
- **Axios** — запросы к API

### Дизайн / Шрифты:
- **Шрифты**: Montserrat (основной), Benzin (заголовки)
- **Темная/светлая тема** с переключателем

---

## ⚙️ Установка и запуск проекта (локально)

### 🔧 Backend (Django)

```bash
# Установка и запуск виртуального окружения
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate

# Установка зависимостей
pip install -r requirements.txt

# Настройка БД
psql -U postgres -c "CREATE DATABASE itcourses_db;"

# Миграции
python manage.py makemigrations
python manage.py migrate

# Запуск сервера
python manage.py runserver

🖥 Frontend (Next.js)
cd frontend

# Установка зависимостей
npm install

# Запуск
npm run dev
Доступно по адресу: http://localhost:3000

✨ Особенности
🔄 Темная и светлая тема (автоматическая и вручную)
🧭 Навигационные вкладки
🎨 Адаптивный интерфейс
💡 Поддержка кастомных шрифтов
🔐 Подготовка под авторизацию и ролевую модель
⚙️ Вся структура разделена на frontend и backend — удобно для масштабирования


🗂 Работа по спринтам (GitHub Projects)
Разработка ведётся по классическому Agile-циклу с разделением на спринты:

 Каждый Sprint — отдельный milestone в GitHub.
 Все задачи/фичи — Issues, сгруппированные в Project Board.
 Ветки именуются как feature/sprint-X-имя_фичи.
 Перед слиянием — Pull Request с код-ревью и линтингом.

📌 Примеры веток:
feature/sprint-1-authentication
feature/sprint-2-course-api
feature/sprint-3-user-dashboard

🛠 В планах
🔐 Авторизация/регистрация с OAuth2
🧾 Прогресс-бар прохождения курса
🧪 Модульные и e2e тесты
📈 Панель администратора и преподавателя
📚 Конструктор курсов
☁️ Хостинг на Vercel + Render (или Railway)

