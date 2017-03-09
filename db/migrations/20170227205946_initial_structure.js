exports.up = (knex) => {

  return knex.schema
  .createTable('messages', (table) => {

    table.increments('id').primary()
    table.biginteger('timestamp')
    table.string('message', 2000)
  })
}

exports.down = (knex) => {

  return knex.schema
    .dropTableIfExists('messages')
}
