# api-rest-personas

script bases de datos:

\*\* Archivo .env:
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=db_persona
DB_PORT=3306

create database db_personas;
use db_personas;

CREATE TABLE usuario ( 
id_usuario int NOT NULL AUTO_INCREMENT,
nombre varchar(50) NOT NULL,
apellido varchar(50) not null,
num_documento int NOT NULL,
correo varchar(50) NOT NULL,
telefono varchar(20),
id_rol tinyint(3),
PRIMARY KEY (id_usuario))


CREATE TABLE editorial (
id_editorial int NOT NULL AUTO_INCREMENT,
nombre_editorial varchar(50) NOT NULL,
PRIMARY KEY (id_editorial)
)


CREATE TABLE autor (
id_autor tinyint(3) NOT NULL AUTO_INCREMENT,
nombre varchar(50) NOT NULL,
nacionalidad varchar(30) NOT NULL,
PRIMARY KEY (id_autor)) 

CREATE TABLE libro (
id_libro int NOT NULL AUTO_INCREMENT,
nombre varchar(60) NOT NULL,
año int NOT NULL,
ubicacion varchar(50) NOT NULL,
edicion tinyint(3) NOT NULL,
descripcion varchar(255),
condicion varchar(255),
id_editorial INT NOT NULL,
id_genero int,
PRIMARY KEY (id_libro)
)

CREATE TABLE genero (
id_genero int NOT NULL AUTO_INCREMENT,
genero_libro varchar(50) NOT NULL,
PRIMARY KEY (id_genero)
) 
  
CREATE TABLE Rol (
id_rol tinyint(3) NOT NULL AUTO_INCREMENT,
nombre varchar(30) NOT NULL,
PRIMARY KEY (id_rol)
)

CREATE TABLE multa (
id_multa int NOT NULL AUTO_INCREMENT,
Valor_multa float NOT NULL,
id_usuario int NOT null,
PRIMARY KEY (id_multa)
) 


create table prestamo (id_prestamo int not null auto_increment PRIMARY KEY,
fecha_prestamo DATE NOT NULL, 
estado_prestamo varchar(40) NOT null,
id_usuario int not NULL
);
