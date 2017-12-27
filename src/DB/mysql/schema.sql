drop database if exists eka;
create database eka;
use eka;

create table users (
  id int not null auto_increment,
  username varchar(30) not null,
  password varchar(20) not null,
  email varchar(50) not null,

  firstname varchar(30),
  lastname varchar(30),
  phone varchar(13),

  address varchar(30),
  city varchar(30),
  state varchar(30),
  zipcode varchar(30),

  primary key (id),
  unique key (username)
);
