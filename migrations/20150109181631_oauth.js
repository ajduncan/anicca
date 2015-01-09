'use strict';

exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('oauth_access_tokens', function(t) {
            t.text('access_token').primary();
            t.text('client_id').notNull();
            t.uuid('user_id').notNull();
            t.timestamp('expires').notNull();
        }),
        knex.schema.createTable('oauth_clients', function(t) {
            t.text('client_id').notNull();
            t.text('client_secret').notNull();
            t.text('redirect_uri').notNull();
            t.primary(['client_id', 'client_secret']);
        }),
        knex.schema.createTable('oauth_refresh_tokens', function(t) {
            t.text('refresh_token').primary();
            t.text('client_id').notNull();
            t.uuid('user_id').notNull();
            t.timestamp('expires').notNull();
        })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('oauth_access_tokens'),
        knex.schema.dropTable('oauth_clients'),
        knex.schema.dropTable('oauth_refresh_tokens')
    ]);
};
