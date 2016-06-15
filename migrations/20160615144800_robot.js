
exports.up = function(knex, Promise) {
  return knex.schema.createTable('robot', function(table){
    table.increments()
    table.text('name')
    table.integer('alliance')
    table.text('owner')
    table.text('description')
    table.text('image')
    table.text('owner_image')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('robot');
};
