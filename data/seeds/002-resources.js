
exports.seed = function(knex) {
  return knex('resources').del()
    .then(function () {
      return knex('resources').insert([
        {id: 1, name: 'garage', description: 'where the tools are'},
        {id: 2, name: 'lawnmower', description: 'cuts the grass'},
        {id: 3, name: 'money', description: 'from the bank I robbed'}
      ]);
    });
};
