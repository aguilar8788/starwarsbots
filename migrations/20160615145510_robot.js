
exports.up = function(knex, Promise) {
  return knex.schema.table('robot', function(table){
    table.foreign('robot' . 'alliance').references('alliance' . 'id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('robot');
};
