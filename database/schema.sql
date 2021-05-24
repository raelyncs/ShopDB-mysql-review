DROP DATABASE ShopDB;

CREATE DATABASE ShopDB;

Use ShopDB;

CREATE TABLE groceries (
  id INT NOT NULL auto_increment,
  name varchar(50) NOT NULL,
  price INT NOT NULL,
  quantity INT NOT NULL,
  PRIMARY KEY (id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < database/schema.sql
 *  to create the database and the tables.*/