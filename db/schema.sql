### Schema

CREATE DATABASE mustSee_db;
USE mustSee_db;

CREATE TABLE moviesTv
(
	ID int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	seen BOOLEAN DEFAULT false,
	PRIMARY KEY (ID)
);