create database db_personas;
use db_personas;

CREATE TABLE usuario
( id_usuario int NOT NULL AUTO_INCREMENT,
nombre varchar(50) NOT NULL,
apellido varchar(50) not null,
num_documento int NOT NULL,
correo varchar(50) NOT NULL,
telefono varchar(20),
id_rol tinyint(3), PRIMARY KEY (id_usuario)
);

INSERT INTO usuario (nombre, apellido, num_documento, correo, telefono) VALUES
('Juan', 'Pérez', 123456789, 'juan.perez@email.com', '3214567890'),
('María', 'López', 987654321, 'maria.lopez@email.com', '3001234567'),
('Carlos', 'García', 456789123, 'carlos.garcia@email.com', '3116549870'),
('Laura', 'Ramírez', 789123456, 'laura.ramirez@email.com', '3109876543'),
('Pedro', 'Martínez', 321789654, 'pedro.martinez@email.com', '3014567890'),
('Luis', 'Rodriguez', 523456721, 'luis.rodriguez@email.com', '31230114432'),
('Jorge','Gomez', 123681723', 'jorge.gomez@email.com', '31928726812');

CREATE TABLE editorial
( id_editorial int NOT NULL AUTO_INCREMENT,
nombre_editorial varchar(50) NOT NULL,
PRIMARY KEY (id_editorial) );

INSERT INTO editorial (nombre_editorial) VALUES
('Sudamericana'),
('Oveja Negra'),
('Francisco de Robles'),
('The American Review'),
('Globe Theatre Press');


CREATE TABLE autor
( id_autor tinyint(3) NOT NULL AUTO_INCREMENT,
nombre varchar(50) NOT NULL,
nacionalidad varchar(30) NOT NULL,
PRIMARY KEY (id_autor) );

INSERT INTO autor (nombre, nacionalidad) VALUES
('Gabriel García Márquez','Colombiano'),
('Jorge Ricardo Isaacs','Colombiano'),
('Miguel de Cervantes','Español'),
('Edgar Allan Poe','Estadounidense'),
('William Shakespeare','Británico'),
('Dante Alighieri','Italiano'),
('Artur Conan Doyle','Británico'),
('Albert Camus','Francés'),
('Robert kiyosaki','Japon'),
('Rafael Pombo', 'Colombia');

CREATE TABLE libro
( id_libro int NOT NULL AUTO_INCREMENT,
nombre varchar(60) NOT NULL,
año int NOT NULL,
edicion tinyint(3) NOT NULL,
descripcion varchar(255),
condicion varchar(255),
id_editorial INT NOT NULL,
id_genero int, PRIMARY KEY (id_libro) );

INSERT INTO libro (nombre, año, edicion, descripcion, condicion, id_editorial, id_genero) VALUES
('Cien Años de Soledad', 1967, 1, 'Novela emblemática del realismo mágico.', 'Buena', 1, 1),
('María', 1867, 1, 'Novela romántica colombiana.', 'Regular', 2, 2),
('Don Quijote de la Mancha', 1605, 2, 'Obra clásica de la literatura española.', 'Buena', 3, 3),
('El Cuervo', 1845, 1, 'Poema narrativo de terror gótico.', 'Excelente', 4, 4),
('Hamlet', 1603 , 1, 'Tragedia clásica del teatro dramático.', 'Buena', 5, 5);

CREATE TABLE genero
( id_genero int NOT NULL AUTO_INCREMENT,
genero_libro varchar(50) NOT NULL,
PRIMARY KEY (id_genero) );

INSERT INTO genero (genero_libro) VALUES
('Realismo mágico'),
('Romanticismo'),
('Novela'),
('Terror'),
('Teatro dramático'),
('Poesia épica'),
('Misterio'),
('Ficción literaria');

CREATE TABLE Rol
( id_rol tinyint(3) NOT NULL AUTO_INCREMENT,
nombre varchar(30) NOT NULL,
PRIMARY KEY (id_rol) );

INSERT INTO rol (nombre) VALUES
('Administrador'),
('Usuarios');

CREATE TABLE multa
( id_multa int NOT NULL AUTO_INCREMENT,
Valor_multa float NOT NULL,
id_usuario int NOT null,
PRIMARY KEY (id_multa) );

create table prestamo
(id_prestamo int not null auto_increment PRIMARY KEY,
fecha_prestamo DATE NOT NULL,
estado_prestamo varchar(40) NOT null,
id_usuario int not NULL );

alter table usuario
add constraint fk_id_rol foreign key
(id_rol) references rol(id_rol)

alter table libro add constraint fk_id_editorial FOREIGN KEY (id_editorial)
REFERENCES editorial(id_editorial)

alter table libro add constraint fk_id_genero foreign key
(id_genero) references genero(id_genero)

alter table multa add constraint fk_id_usuario foreign key (id_usuario)
references usuario (id_usuario)

alter table prestamo
add constraint fk_prestamo__id_usuario
foreign key (id_usuario)
references usuario (id_usuario)
