DROP TABLE marker ;
CREATE TABLE marker
	(
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name varchar(60) NOT NULL,
	address varchar(80) NOT NULL,
	lat FLOAT( 10, 6) NOT NULL,
	lng FLOAT( 10, 6) NOT NULL,
	type varchar(30) NOT NULL,
	assignedWorker char(5) NULL,
	postedBy char(5) NULL,
	timeCreated DATETIME NULL,
	timeResolved DATETIME NULL
	);