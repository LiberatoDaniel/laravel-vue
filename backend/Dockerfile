FROM php:7.2-fpm-alpine

WORKDIR /var/www/html

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Install driver mysql
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Permissões para o usuário www-data
ADD . /var/www/html
RUN chown -R www-data:www-data /var/www/html
USER www-data

