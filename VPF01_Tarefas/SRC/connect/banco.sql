DROP DATABASE IF NOT EXISTS lista_mercado;
CREATE DATABASE IF NOT EXISTS lista_mercado;
USE lista_mercado;

CREATE TABLE IF NOT EXISTS lista (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR (255) NOT NULL,
    descricao VARCHAR (255) NOT NULL,
    data_criacao DATE,
    nome_pessoa VARCHAR (255) NOT NULL
);

show tables;