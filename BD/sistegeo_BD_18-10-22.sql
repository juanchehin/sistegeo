-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema sistgeo
-- -----------------------------------------------------
-- Sistema de geolocalizacion satelital

-- -----------------------------------------------------
-- Schema sistgeo
--
-- Sistema de geolocalizacion satelital
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `sistgeo` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin ;
USE `sistgeo` ;

-- -----------------------------------------------------
-- Table `sistgeo`.`Vehiculo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sistgeo`.`Vehiculo` (
  `IdVehiculo` INT NOT NULL,
  `Vehiculo` VARCHAR(45) NULL,
  `Tipo` VARCHAR(45) NULL,
  `Patente` VARCHAR(45) NULL,
  `FechaAlta` DATETIME NULL,
  `FechaModificacion` DATETIME NULL,
  `EstadoVehiculo` CHAR(1) NULL DEFAULT 'L' COMMENT 'O: Ocupado\nL: Libre\n\nB: Baja\n\nSi esta en O o L, el vechiculo esta en activo',
  `Descripcion` VARCHAR(255) NULL,
  PRIMARY KEY (`IdVehiculo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sistgeo`.`Trazabilidad`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sistgeo`.`Trazabilidad` (
  `IdVehiculo` INT NOT NULL,
  `Latitud` DECIMAL(10,8) NULL,
  `Longitud` DECIMAL(10,8) NULL,
  `Pais` VARCHAR(45) NULL,
  `Fecha` DATETIME NULL COMMENT 'Fecha en la cual se marco la posicion del usuario',
  INDEX `fk_Trazabilidad_Vehiculo1_idx` (`IdVehiculo` ASC),
  CONSTRAINT `fk_Trazabilidad_Vehiculo1`
    FOREIGN KEY (`IdVehiculo`)
    REFERENCES `sistgeo`.`Vehiculo` (`IdVehiculo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sistgeo`.`Roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sistgeo`.`Roles` (
  `IdRol` INT NOT NULL,
  `Rol` VARCHAR(45) NULL,
  `Observaciones` VARCHAR(100) NULL,
  PRIMARY KEY (`IdRol`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sistgeo`.`Usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sistgeo`.`Usuarios` (
  `IdUsuario` INT NOT NULL,
  `IdRol` INT NOT NULL,
  `Usuario` VARCHAR(45) NULL,
  `Password` VARCHAR(45) NULL,
  `Apellidos` VARCHAR(60) NULL,
  `Nombres` VARCHAR(60) NULL,
  `FechaAlta` DATETIME NULL,
  `FechaModificacion` DATETIME NULL,
  `EstadoUsuario` CHAR(1) NULL,
  `Observaciones` VARCHAR(255) NULL,
  PRIMARY KEY (`IdUsuario`),
  INDEX `fk_Usuarios_Roles_idx` (`IdRol` ASC),
  CONSTRAINT `fk_Usuarios_Roles`
    FOREIGN KEY (`IdRol`)
    REFERENCES `sistgeo`.`Roles` (`IdRol`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sistgeo`.`Jornada`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sistgeo`.`Jornada` (
  `IdVehiculo` INT NOT NULL,
  `IdUsuario` INT NOT NULL,
  `FechaInicio` DATETIME NULL,
  `FechaFin` DATETIME NULL,
  INDEX `fk_Vehiculo_has_Usuarios_Usuarios1_idx` (`IdUsuario` ASC),
  INDEX `fk_Vehiculo_has_Usuarios_Vehiculo1_idx` (`IdVehiculo` ASC),
  CONSTRAINT `fk_Vehiculo_has_Usuarios_Vehiculo1`
    FOREIGN KEY (`IdVehiculo`)
    REFERENCES `sistgeo`.`Vehiculo` (`IdVehiculo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Vehiculo_has_Usuarios_Usuarios1`
    FOREIGN KEY (`IdUsuario`)
    REFERENCES `sistgeo`.`Usuarios` (`IdUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
