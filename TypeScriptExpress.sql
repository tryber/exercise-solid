CREATE DATABASE IF NOT EXISTS `typescript_express`;
USE `typescript_express`;

DROP TABLE IF EXISTS `plants`;
CREATE TABLE `plants` (
  `id` INT NOT NULL AUTO_INCREMENT, 
  `breed` VARCHAR(100) NOT NULL, 
  `size` INT NOT NULL, 
  `needs_sun` BOOLEAN NOT NULL, 
  `origin` VARCHAR(250) NOT NULL,
  `water_frequency` INT DEFAULT 0,
  PRIMARY KEY (`id`)
);

INSERT INTO `plants` 
VALUES 
  (1, 'Bromelia', 102, false, 'Argentina', 3), 
  (2, 'Orquidea', 99, true, 'Brazil', 0);
