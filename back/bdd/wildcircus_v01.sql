drop database if exists wildcircus; 
CREATE DATABASE `wildcircus`;
USE `wildcircus`;

CREATE TABLE `users`(
  `iduser` INT NOT NULL AUTO_INCREMENT,
  `nickname` VARCHAR(100) NOT NULL,
  `email` VARCHAR(255) NOT NULL UNIQUE, 
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`iduser`) 
);

CREATE TABLE `tours`(
    `idtour` INT NOT NULL AUTO_INCREMENT,
    `city` VARCHAR(255),
    `date` DATE NOT NULL,
    `number_of_sits` INT,
    PRIMARY KEY (`idtour`)    
);

CREATE TABLE `tour_user`(
    `idtouruser` INT NOT NULL AUTO_INCREMENT,
    `userid` INT NOT NULL,
    `tourid` INT NOT NULL,
    `tiket` TEXT,
    FOREIGN KEY (`userid`) REFERENCES `users`(`iduser`),
    FOREIGN KEY (`tourid`) REFERENCES `tours`(`idtour`),
    PRIMARY KEY (`idtouruser`)
);



