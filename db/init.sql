CREATE TABLE IF NOT EXISTS files (
    ID SERIAL,
    Name VARCHAR ( 255 ) NOT NULL,
    Created TIMESTAMP default current_timestamp,
    LastModified TIMESTAMP default current_timestamp,
    Version INT NOT NULL default 0,
    File bytea NOT NULL,
    PRIMARY KEY(ID)
);