
exports.seed = function(knex) {
  return knex('projects').del()
    .then(function () {
      return knex('projects').insert([
        {id: 1, name: 'oil_change', description:'change oil', completed:false},
        {id: 2, name: 'mow', description:'mow lawn', completed:false},
        {id: 3, name: 'world_domination', description:'conquer the world', completed:false}
      ]);
    });
};
