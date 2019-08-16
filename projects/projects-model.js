const db = require('../data/db-config')

module.exports = {
    findProjects,
    findTasks,
    findResources,
    findById,
    findTasks,
    addResource,
    addProject,
    update,
    remove,
    addTask
  };
  
  function findProjects() {
    return db('projects');
  }

  function findResources() {
    return db('resources');
  }

  function findTasks() {
    return db('task');
  }
  function findById(id) {
    return db('projects')
    .where({ id });
  }
  
  function addProject(project) {
    return db('projects')
    .insert(project)
    .then(res => find())
  }

  function addResource(resource) {
    return db('resources')
    .insert(resource)
    .then(res => find())
  }

  function addTask(task) {
    return db('projects')
    .insert(task)
    .then(res => find())
  }
  
  function findTasks(id) {
    return db('projects')
      .innerJoin('tasks', 'tasks.task_id', '=', 'project.id')
      .select('projects.project_name', 'tasks.task_id')
      .where({project_id: id });
  }
  
  function update(id, changes) {
    return db('projects')
      .where({ id })
      .update(changes);
  }
  
  function remove(id) {
    return db('projects')
      .where({ id })
      .del();
  }

 
  