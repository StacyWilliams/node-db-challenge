const db = require('../data/db-config')

module.exports = {
    findProjects,
    findTasks,
    findResources,
    findById,
    addResource,
    addProject,
    addTask
  };
  
  function findProjects() {
    return db('projects');
  }

  function findResources() {
    return db('resources');
  }

 function findTasks(id) {
  return db('tasks')
       .join('projects', "projects.id", 'tasks.project_id')
       .where('project_id', id)  
      // .select('project_id')
       
    }

  function findById(id) {
    return db('projects')
    .where({ id });
  }
  
  function addProject(todo) {
    return db('projects')
    .insert(todo)
    .then(res => findProjects())
  }

  function addResource(resource) {
    return db('resources')
    .insert(resource)
    .then(res => findResources())
  }

  function addTask(task) {
    return db('tasks')
    .insert(task)
    .then(res => findTasks())
  }
  
 

 
  