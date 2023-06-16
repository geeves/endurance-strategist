--liquibase formatted sql

--changeset geeves:1
create table driver
(
	driverId SERIAL PRIMARY KEY,
	uuid varchar(36),
	fullName varchar(255),
	iracingId int,
);

create table racingService (
  racingServiceId SERIAL PRIMARY KEY,
  servieName varchar(255),
);

create table driverRacingServiceXref(
  id SERIAL primary key,
  racingServiceId int,
  driverId int,
  driverServiceId int
);
-- rollback drop table if exists driver, racingService, driverRacingServiceXref;
