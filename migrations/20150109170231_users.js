'use strict';

exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(t) {
        t.increments('id').primary();
        t.uuid('uuid').notNull();
        t.string('username').notNull();
        t.text('password').notNull();
        t.dateTime('created_at').notNull();
        t.dateTime('updated_at').nullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
};
