## Подготовка окружения для работы с БД

- Установка сервера для Linux, Windows, MacOS, BSD, Solaris
  - Дистрибутивы: https://www.postgresql.org/download/
  - Инструкция для Fedora: https://fedoraproject.org/wiki/PostgreSQL#Installation
  - Готовые скрипты: https://github.com/metarhia/impress/blob/master/deploy/
- Установка PgSQL Admin
  - Дистрибутивы: https://www.pgadmin.org/download/
  - Для Fedora: `dnf install pgadmin3`
- Создание пользователя и базу данных
  - `su - postgres`
  - `psql` попадаем в командную строку PostgreSQL
  - `\password postgres` устанавливаем паполь пользователю
  - создаем нового пользователя `CREATE USER marcus WITH PASSWORD 'marcus';`
  - создаем базу данных `CREATE DATABASE application OWNER marcus;`
  - `\quit` выходим
- Исполняем файл с SQL скриптом создания базы
  - `sudo psql -U marcus -d application -a -f example.sql`
- Установка зависимостей (включая модуль `pg`) `npm i`
- Запуск `node application.js`
