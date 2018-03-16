
-- make seinfeld database
DROP DATABASE IF EXISTS seinfeldDB;
CREATE DATABASE seinfeldDB;
USE seinfeldDB;

-- make character table
CREATE TABLE seinfeld_chars(
id INT(11) NOT NULL AUTO_INCREMENT,
char_name VARCHAR (30),
coolness_rating INT (11),
attitude VARCHAR (30),
PRIMARY KEY (id)
);

-- insert character data
INSERT INTO seinfeld_chars (char_name, coolness_rating, attitude)
VALUES ('Newman', 30, 'lurking & disgruntled'), ('Jerry', 50, 'awkward'), ('Elaine', 70, 'righteous'),('George', 10, 'selfish');

SELECT * FROM seinfeld_chars;