
 use trial1_0;
CREATE TABLE `user` ( 
`id` INT NOT NULL AUTO_INCREMENT , 
`firstname` VARCHAR(150) NOT NULL , 
`lastname` VARCHAR(150) NOT NULL , 
`username` VARCHAR(100) NOT NULL , 
`password` VARCHAR(150) NOT NULL , 
`role` INT NOT NULL , 
`dob` DATE NOT NULL , 
`user_id` VARCHAR(45) NOT NULL , 
`contact` VARCHAR(20) NOT NULL , 
`department` INT NOT NULL , 
PRIMARY KEY (`id`, `user_id`));

CREATE TABLE `course` ( 
`id` INT NOT NULL AUTO_INCREMENT ,
 `course_id` INT(150) NOT NULL , 
`course_name` VARCHAR(150) NOT NULL , 
PRIMARY KEY (`id`, `course_id`)) ENGINE = InnoDB;

CREATE TABLE `roletable` (
 `id` INT NOT NULL AUTO_INCREMENT , 
`role` VARCHAR(80) NOT NULL , 
PRIMARY KEY (`id`)) ENGINE = InnoDB;

CREATE TABLE `department`( 
`department_id` INT NOT NULL ,
`department_name` VARCHAR(150) NOT NULL , 
PRIMARY KEY (`department_id`)) ENGINE = InnoDB;

CREATE TABLE `lecturer_course` ( 
`id` INT NOT NULL AUTO_INCREMENT , 
`user_id` INT NOT NULL , 
`course_id` INT NOT NULL , 
PRIMARY KEY (`id`)) ENGINE = InnoDB;

CREATE TABLE `student_course` ( 
`Id` INT NOT NULL AUTO_INCREMENT , 
`user_id` INT NOT NULL , 
`course_id` INT NOT NULL , 
PRIMARY KEY (`Id`)) ENGINE = InnoDB; 

CREATE TABLE `result` ( 
`Id` INT NOT NULL AUTO_INCREMENT , 
`Score` INT NOT NULL , 
`created_at` INT NOT NULL , 
`user_id` INT NOT NULL , 
PRIMARY KEY (`Id`)) ENGINE = InnoDB;

CREATE TABLE `result_changes` (
 `results changes` INT NOT NULL AUTO_INCREMENT , 
`user_id` INT NOT NULL ,
 `created at` INT NOT NULL , 
`old_results` INT NOT NULL , 
`new_results` INT NOT NULL , 
`result_id` INT NOT NULL , 
`reason` INT NOT NULL , 
PRIMARY KEY (`results changes`)) ENGINE = InnoDB;

ALTER TABLE `lecturer_course` ADD CONSTRAINT `lecturer_fk` FOREIGN KEY (`user_id`) 
REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE `course` ADD UNIQUE(`course_id`);


#INSERT STATEMENTS
INSERT INTO `roletable` (`id`, `role`) VALUES ('1', 'Adminstrator'), ('2', 'Lecturer'), 
('3', 'Student');
