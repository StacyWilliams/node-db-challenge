
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project_tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('project_tasks').insert([
        {id: 1, project_id: '1', tasks_id:'1'},
        {id: 1, project_id: '2', tasks_id:'2'},
        {id: 1, project_id: '3', tasks_id:'3'}
      ]);
    });
};
