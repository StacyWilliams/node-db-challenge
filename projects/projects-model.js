const db = require('../data/db-config.js')

module.exports = {
    findProjects,
    findTasks,
    findResources,
    // findProjectById,
    // findTaskById,
    // findResourceById,
    addProject,
    addTask,
    addResource

};


function findProjects() {
    return db('projects');
    
};

function findTasks() {
   
    return db('tasks')
   .join('projects','projects.id', 'tasks.project_id')
   .select('tasks.id', 'tasks.description', 'projects.name', 'projects.description as project_description')
  
};

function findResources() {
    return db('resources');
};

function addProject(project) {
    return db('projects')
    .insert(project)
    .then(res => findProjects())
};

function addTask(task) {
    return db('tasks')
    .insert(task)
    .then(res => findTasks())
};

function addResource(resource) {
    return db('resources')
    .insert(resource)
    .then(res => findResources())
};

