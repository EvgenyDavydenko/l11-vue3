## Laravel11 Vue3 создание блога с авторизацией

1.  Creating a Laravel Project
```
composer create-project laravel/laravel backend
cd backend
```
2.   install Laravel Sanctum
```
php artisan install:api
cors опубликовать здесь
```
3.  install Fortify
```
composer require laravel/fortify
php artisan fortify:install
```
4.  Creating a Vue Application with Vue-Router and Pinia
```
cd ..
npm create vue@latest
cd frontend
npm install
```
5.  ```npm i axios```
6.  config laravel .env
7.  ```php artisan migrate --seed```
8.  ```php artisan config:publish cors```
