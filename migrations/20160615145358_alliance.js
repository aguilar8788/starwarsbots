
exports.up = function(knex, Promise) {
  return knex.schema.createTable('alliance', function(table){
    table.increments()
    table.text('name')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('alliance')
};
