CREATE DATABASE connect4;

USE connect4;

CREATE TABLE gameData (
    id int(11) NOT NULL,
    board varchar(200) NOT NULL,
    redVictories int NOT NULL,
    blueVictories int NOT NULL,
    PRIMARY KEY (id)
);