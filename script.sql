-- MySQL Workbench Synchronization
-- Generated: 2018-10-18 20:45
-- Model: New Model
-- Version: 1.0
-- Project: Name of the project
-- Author: mathe

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE TABLE IF NOT EXISTS `teste4all`.`Cliente` (
  `idCliente` INT(11) NOT NULL AUTO_INCREMENT,
  `Nome` VARCHAR(45) NULL DEFAULT NULL,
  `Email` VARCHAR(45) NULL DEFAULT NULL,
  `Senha` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`idCliente`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;

CREATE TABLE IF NOT EXISTS `teste4all`.`Filme` (
  `idFilme` INT(11) NOT NULL AUTO_INCREMENT,
  `Titulo` VARCHAR(45) NULL DEFAULT NULL,
  `Diretor` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`idFilme`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `teste4all`.`Copia` (
  `idCopia` INT(11) NOT NULL AUTO_INCREMENT,
  `Filme` INT(11) NULL DEFAULT NULL,
  `Disponivel` TINYINT(4) NULL DEFAULT NULL,
  PRIMARY KEY (`idCopia`),
  INDEX `Filme_idx` (`Filme` ASC) VISIBLE,
  CONSTRAINT `Filme`
    FOREIGN KEY (`Filme`)
    REFERENCES `teste4all`.`Filme` (`idFilme`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `teste4all`.`Loca` (
  `Cliente_idCliente` INT(11) NOT NULL,
  `Copia_idCopia` INT(11) NOT NULL,
  `idLocacao` INT(11) NOT NULL AUTO_INCREMENT,
  INDEX `fk_Cliente_has_Copia_Copia1_idx` (`Copia_idCopia` ASC) VISIBLE,
  INDEX `fk_Cliente_has_Copia_Cliente1_idx` (`Cliente_idCliente` ASC) VISIBLE,
  PRIMARY KEY (`idLocacao`),
  CONSTRAINT `fk_Cliente_has_Copia_Cliente1`
    FOREIGN KEY (`Cliente_idCliente`)
    REFERENCES `teste4all`.`Cliente` (`idCliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Cliente_has_Copia_Copia1`
    FOREIGN KEY (`Copia_idCopia`)
    REFERENCES `teste4all`.`Copia` (`idCopia`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

SELECT * FROM cliente;