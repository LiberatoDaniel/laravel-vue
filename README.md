# laravel-vuejs

## Execute os seguintes passos para rodar o projeto
- vá para pasta backend e execute
```
docker-compose up -d --build
```
- após o build entre no container executando este comando ainda na pasta backend
```
docker-compose exec php bash
```
- dentro do container vá para a pasta html
```
cd html
```
- certifique-se de estar dentro do caminho
```
/var/www/html
```
- copie o arquivo .env-xample para criar o .env
```
cp .env.example .env
```
- execute o composer install e rode as migrations
```
composer install
```
```
php artisan key:generate
php artisan migrate
```
- agora saia do container execute
```
exit
```
- vá para pasta frontend-vue
```
cd ../frontend-vue/
```
- execute o build do frontend
```
docker-compose up -d --build
```
- após concluir acesse http://localhost
