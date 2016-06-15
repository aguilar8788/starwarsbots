
exports.seed = function(knex, Promise) {
 return knex('robot').del().then(function(){
  return Promise.join(

    knex('robot').insert({name: 'C3PO', alliance: "1", owner: 'Anikin'}),
    knex('robot').insert({name: 'R2D2', alliance: "1", owner: 'Luke'}),
    knex('robot').insert({name: 'BB-8', alliance: "1", owner: 'Rey'})

    );
  })
};
