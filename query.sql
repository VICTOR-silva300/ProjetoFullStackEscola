CREATE DATABASE escola_db;

alunosCREATE TABLE alunos(
	id INT AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(80) NOT NULL,
	cpf CHAR(11) NOT NULL UNIQUE,
	cep CHAR(8),
	uf CHAR(2),
	rua VARCHAR(120),
	numero INT,
	complemento VARCHAR(120)
	
);

INSERT INTO alunos 
	(nome,cpf,cep,uf,rua,numero, complemento)
VALUES
	("Felipe Brito","12345678909","06123456","SP","Rua Logo Ali",30,"Casa"),
	("Daniel Ribeiro","98765432101","06123457","RJ","Rua SENAI",1250,NULL),
	("Mirella Sene","12345678988","06123411","ES","Rua SENAI",123,"APT 3")






SELECT * FROM alunos WHERE nome LIKE "%Felipe%";
Felipe Silva
Joao Felipe

SELECT * FROM alunos WHERE nome LIKE "Felipe%"
