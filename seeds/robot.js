
exports.seed = function(knex, Promise) {
 return knex('robot').del().then(function(){
  return Promise.join(

    knex('robot').insert({name: 'C3PO', alliance: "1", owner: 'Anikin', description: 'humanoid, gold', image:'http://vignette2.wikia.nocookie.net/starwars/images/7/7e/ThreepioTFA-Fathead.png/revision/latest?cb=20150909022733'}),
    knex('robot').insert({name: 'R2D2', alliance: "1", owner: 'Luke', description: 'Moving Trash Can, Beeps', image: 'http://vignette2.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png/revision/latest?cb=20150909022306'}),
    knex('robot').insert({name: 'BB-8', alliance: "1", owner: 'Rey', description: 'round, orange, beeps', image: 'http://cdn.shopify.com/s/files/1/0170/5178/products/bb8-1_grande.png?v=1441428783'})

    );
  })
};
