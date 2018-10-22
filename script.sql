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

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

#ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'

INSERT INTO filme(Titulo, Diretor) VALUES('TROPA DE ELITE', 'JOSÉ PADILHA');
INSERT INTO filme(Titulo, Diretor) VALUES('CIDADE DE DEUS', 'FERNANDO MEIRELLES');
INSERT INTO filme(Titulo, Diretor) VALUES('O HOMEM QUE COPIAVA', 'JORGE FURTADO');
INSERT INTO filme(Titulo, Diretor) VALUES('OS VINGADORES', 'ANTHONY RUSSO');
INSERT INTO filme(Titulo, Diretor) VALUES('TROPA DE ELITE', 'JOSÉ PADILHA');
INSERT INTO filme(Titulo, Diretor) VALUES('V DE VINGANÇA', 'JAMES MCTEIGUE');

INSERT INTO copia(Filme, Disponivel) VALUES(1, TRUE);
INSERT INTO copia(Filme, Disponivel) VALUES(1, TRUE);
INSERT INTO copia(Filme, Disponivel) VALUES(1, TRUE);
INSERT INTO copia(Filme, Disponivel) VALUES(2, TRUE);
INSERT INTO copia(Filme, Disponivel) VALUES(2, TRUE);
INSERT INTO copia(Filme, Disponivel) VALUES(2, TRUE);
INSERT INTO copia(Filme, Disponivel) VALUES(3, TRUE);
INSERT INTO copia(Filme, Disponivel) VALUES(3, TRUE);
INSERT INTO copia(Filme, Disponivel) VALUES(3, TRUE);
INSERT INTO copia(Filme, Disponivel) VALUES(4, TRUE);
INSERT INTO copia(Filme, Disponivel) VALUES(4, TRUE);
INSERT INTO copia(Filme, Disponivel) VALUES(4, TRUE);
INSERT INTO copia(Filme, Disponivel) VALUES(5, TRUE);
INSERT INTO copia(Filme, Disponivel) VALUES(5, TRUE);
INSERT INTO copia(Filme, Disponivel) VALUES(5, TRUE);
INSERT INTO copia(Filme, Disponivel) VALUES(6, TRUE);
INSERT INTO copia(Filme, Disponivel) VALUES(6, TRUE);
INSERT INTO copia(Filme, Disponivel) VALUES(6, TRUE);

SELECT filme.Titulo FROM filme INNER JOIN copia on filme.idFilme = copia.Filme WHERE copia.Disponivel = true group by Titulo;
SELECT * FROM filme WHERE Titulo = 'TROPA DE ELITE';
SELECT * FROM copia
