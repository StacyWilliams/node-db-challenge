
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, description: 'start mower', notes:'make sure there is gas', completed:false, project_id:1},
        {id: 2, description: 'remove drain plug and filter', notes:'find oil filter wrench', completed:true, project_id:1},
        {id: 3, description: 'learn nodejs', notes:'listen to Luis', completed:false, project_id:1}
      ]);
    });
};
