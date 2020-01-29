drop database if exists wildcircus; 
CREATE DATABASE `wildcircus`;
USE `wildcircus`;

CREATE TABLE `users`(
  `iduser` INT NOT NULL AUTO_INCREMENT,
  `nickname` VARCHAR(100) NOT NULL,
  `email` VARCHAR(255) NOT NULL UNIQUE, 
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`userID`) 
);

CREATE TABLE `tours`(
    `idtour` INT NOT NULL AUTO_INCREMENT,
    `city` VARCHAR(255),
    `date` DATE NOT NULL,
    `number_of_sits` INT,
    PRIMARY KEY (`travelID`)    
);

CREATE TABLE `tour_user`(
    `idtouruser` INT NOT NULL AUTO_INCREMENT,
    `userid` INT NOT NULL,
    `tourid` INT NOT NULL,
    `rate` INT,
    `comment` TEXT,
    FOREIGN KEY (`userid`) REFERENCES `users`(`iduser`),
    FOREIGN KEY (`tourid`) REFERENCES `tourss`(`idtour`),
    PRIMARY KEY (`idtouruser`)
);




INSERT INTO travels (IDuser_creator, destination, start_date, end_date, number_of_travelers_max, description, cityPic) VALUES
(1, 'Cancun', '2020-02-01', '2020-02-09', 5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur purus eros, eleifend ut luctus sit amet, vehicula ut purus. Nulla quis malesuada nunc, sed auctor ligula. Etiam ut imperdiet nisl. In hac habitasse platea dictumst. Pellentesque et magna nunc. Vivamus a tempus dolor. Proin condimentum efficitur sapien id ultricies.', 'cancun.jpg'),
(1, 'Londres', '2020-02-10', '2020-02-16', 4, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur purus eros, eleifend ut luctus sit amet, vehicula ut purus. Nulla quis malesuada nunc, sed auctor ligula. Etiam ut imperdiet nisl. In hac habitasse platea dictumst. Pellentesque et magna nunc. Vivamus a tempus dolor. Proin condimentum efficitur sapien id ultricies.', 'Londres.jpg'),
(1, 'Rome', '2020-02-17', '2020-02-23', 3, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur purus eros, eleifend ut luctus sit amet, vehicula ut purus. Nulla quis malesuada nunc, sed auctor ligula. Etiam ut imperdiet nisl. In hac habitasse platea dictumst. Pellentesque et magna nunc. Vivamus a tempus dolor. Proin condimentum efficitur sapien id ultricies.', 'Rome.jpg'),
(1, 'Honolulu', '2020-02-24', '2020-03-01', 2, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur purus eros, eleifend ut luctus sit amet, vehicula ut purus. Nulla quis malesuada nunc, sed auctor ligula. Etiam ut imperdiet nisl. In hac habitasse platea dictumst. Pellentesque et magna nunc. Vivamus a tempus dolor. Proin condimentum efficitur sapien id ultricies.', 'Honolulu.jpg'),
(1, 'Venise', '2020-03-02', '2020-03-08', 3, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur purus eros, eleifend ut luctus sit amet, vehicula ut purus. Nulla quis malesuada nunc, sed auctor ligula. Etiam ut imperdiet nisl. In hac habitasse platea dictumst. Pellentesque et magna nunc. Vivamus a tempus dolor. Proin condimentum efficitur sapien id ultricies.', 'Venice.jpg'),
(1, 'Stockholm', '2020-04-01', '2020-04-05', 3, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur purus eros, eleifend ut luctus sit amet, vehicula ut purus. Nulla quis malesuada nunc, sed auctor ligula. Etiam ut imperdiet nisl. In hac habitasse platea dictumst. Pellentesque et magna nunc. Vivamus a tempus dolor. Proin condimentum efficitur sapien id ultricies.', 'Stockholm.jpg'),
(1, 'Toronto', '2020-04-10', '2020-04-20', 5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur purus eros, eleifend ut luctus sit amet, vehicula ut purus. Nulla quis malesuada nunc, sed auctor ligula. Etiam ut imperdiet nisl. In hac habitasse platea dictumst. Pellentesque et magna nunc. Vivamus a tempus dolor. Proin condimentum efficitur sapien id ultricies.', 'toronto.jpg');