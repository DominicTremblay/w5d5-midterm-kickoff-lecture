# knex

## Migrations

- Create migrations with knex `knex migrate:make migrationName`.
- Do not erase migration files. Do rollback instead.
- Do not modify the database in psql.
- Don't modify existing migrations that have been pushed to github already.
- Run migration with `knex migrate:latest` or rollback with `knex migrate:rollback`
- Find out the latest migration that was ran with `knex migrate:currentVersion`
- Do create tables that are the one side of the relationship first and tables that are the many side second (because you need to create foreign keys)

## Seeds

- Create seed files for populating the database
- Create seed file with `knex seed:make fileName`
- Seeds are executed in alphabetical order, so you might want to precede filenames with a letter (ex.: a_addUsers.js, b_addPolls.js)
- To restart auto increments at 1 each time the seed file runs, use Promise.all and ALTER SEQUENCE query:

```js
exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('users').del(),
    knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 1'),
    knex('users').then(function() {
      return Promise.all([
        knex('users').insert({ name: 'Alice' }),
        knex('users').insert({ name: 'Bob' }),
        knex('users').insert({ name: 'Charlie' }),
      ]);
    }),
  ]);
};
```
