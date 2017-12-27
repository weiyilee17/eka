exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('users', function (table) {
      table.increments('id').unsigned().primary();

      table.string('username', 30).nullable();
      table.string('password', 20).nullable();
      table.string('email', 50).nullable().unique();      

      table.string('firstname', 30).nullable();
      table.string('lastname', 30).nullable();
      table.string('phone', 13).nullable();


      table.string('address', 100).nullable();
      table.string('city', 30).nullable();

      // TODO: can be transformed to integer later
      table.string('state', 30).nullable();
      table.string('zipcode', 5).nullable();
      
      table.timestamps(true, true);
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users'),
  ]);
};

/*

create table users (
  id serial not null,
  username varchar(30) not null,
  password varchar(20) not null,
  email varchar(50) not null,

  firstname varchar(30) not null,
  lastname varchar(30) not null,
  phone varchar(13) not null,

  address varchar(30) not null,
  city varchar(30) not null,
  state varchar(30) not null,
  zipcode varchar(30) not null,

  time timestamp not null,
  primary key (id)
);



*/