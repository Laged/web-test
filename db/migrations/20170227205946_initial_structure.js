exports.up = (knex) => {

  return knex.schema
  .createTable('messages', (table) => {

    table.increments('id').primary()
    table.biginteger('timestamp')
    table.string('message')
  })
}

exports.down = (knex) => {

  return knex.schema
    .dropTableIfExists('messages')
}
