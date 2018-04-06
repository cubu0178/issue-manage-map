DROP TABLE worker ;
CREATE TABLE worker
	(
	worker_ID char(5) UNIQUE NOT NULL,
	email varchar(30) NOT NULL,
	password varchar(30) NOT NULL,
	PRIMARY KEY (worker_ID)
	);