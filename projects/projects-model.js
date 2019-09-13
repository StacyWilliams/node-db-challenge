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
//   **The list of tasks should include the project 
 //   name and project description**.
 function findTasks(id) {
  return db('tasks')
       .join('projects')
      //  .select('tasks.id', 'projects.project_id', 'tasks.task_number', 'projects.project_name as project_name', 'tasks.instructions')
      // .where({ project_id: id });
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
  
 

 
  