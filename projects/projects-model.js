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

  function findTasks() {
    return db("tasks")
    .innerJoin("project", "project.id", "=", "task.project_id")
    .select(
      "task.id",
      "project.name",
      "project.description",
      "task.description",
      "task.notes",
      "task.completed"
    );
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
  
 

 
  