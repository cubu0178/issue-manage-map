DROP TABLE user ;
CREATE TABLE user
	(
	user_ID char(5) unique NOT NULL,
	email varchar(30) NOT NULL,
	password varchar(30) NOT NULL,
	PRIMARY KEY (user_ID)
	);