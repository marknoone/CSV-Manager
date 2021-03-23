CREATE DATABASE IF NOT EXISTS `csv_manager`;
USE `csv_manager`;

CREATE TABLE IF NOT EXISTS `files` (
    `ID` INT(11) NOT NULL UNIQUE,
    `Name` VARCHAR(255) NOT NULL,
    `Created` DATETIME default GETDATE(),
    `LastModified` DATETIME default GETDATE(),
    `Version` INT NOT NULL default 0,
    `File` LONGBLOB NOT NULL,
    PRIMARY KEY(`ID`)
) Engine = InnoDB;