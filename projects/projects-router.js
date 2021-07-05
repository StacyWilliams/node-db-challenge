const express = require('express');
const helpers = require('./projects-model.js');

const router = express.Router();

router.get('/projects', async (req, res) => {
  
  try {
    const todos = await helpers.findProjects();
    todos.map(p => {
      p.completed = p.completed == '1' ? true : false
     })
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get projects' });
  }
  
}); //endpoint works

router.get('/resources', async (req, res) => {
  try {
    const resources = await helpers.findResources();
    res.json(resources);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get resources' });
  }
}); //endpoint works

router.get('/projects/:id/tasks', async (req, res) => {
    const { id } = req.params 
    console.log(id) 
   try {
     const tasks = await helpers.findTasks(id);
     tasks.map(t => {
      t.completed = t.completed == '1' ? true : false
     })
     res.status(200).json(tasks);
   } catch (err) {
    res.status(500).json({ message: 'Failed to get tasks' });
   } 
   
}); //endpoint works

router.post('/resources', async (req, res) => {
  const newResource = req.body;

  try {
    const resource = await helpers.addResource(newResource);
    res.status(201).json(resource);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create new resource' });
  }
}); //endpoint works

router.post('/projects', async (req, res) => {
  const newProject = req.body;

  try {
    const todo = await helpers.addProject(newProject);
    res.status(201).json(todo);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create new project' });
  }
});//endpoint works

router.post('/tasks', async (req, res) => {
  const taskData = req.body; 

  try {
    if (taskData) {
      const task = await helpers.addTask(taskData);
      res.status(201).json(task);
    } 
  } catch (err) {
    res.status(500).json({ message: 'Failed to create new task' });
  }
});//endpoint works

module.exports = router;