const express = require('express');
const db = require('../data/db-config')
const helpers = require('./projects-model.js');

const router = express.Router();

router.get('/data/projects', async (req, res) => {
  // const completed = res.params.completed
  // completed === 'false' ? res.send().json({completed:'false'}) : res.send().json({completed: 'true'})
  try {
    const todos = await helpers.findProjects();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get projects' });
  }
  
}

); //endpoint works

router.get('/data/resources', async (req, res) => {
  try {
    const resources = await helpers.findResources();
    res.json(resources);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get resources' });
  }
}); //endpoint works

router.get('/data/tasks', async (req, res) => {
   try {
     const tasks = await helpers.findTasks();
     res.json(tasks);
   } catch (err) {
    res.status(500).json({ message: 'Failed to get tasks' });
   }
  //  task.completed == false ? res.send().json({completed:'false'}) : res.send().json({completed: 'true'})
}); //endpoint works

router.post('/data/resources', async (req, res) => {
  const newResource = req.body;
console.log(req.body)
  try {
    const resource = await helpers.addResource(newResource);
    res.status(201).json(resource);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create new resource' });
  }
  // const newResource = req.body 
     
  //   if(newResource){
  //       resources.push(newResource);
  //       res.status(201).json({resources});
  //   }else{
  //       res.status(400).json({message: "please provide a resource"})
  //   }
});

router.post('/data/projects', async (req, res) => {
  const newProject = req.body;

  try {
    const todo = await helpers.addProject(newProject);
    res.status(201).json(todo);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create new project' });
  }
});

router.post('/data/tasks', async (req, res) => {
  const taskData = req.body; 

  try {

    if (taskData) {
      const task = await helpers.addTask(taskData);
      res.status(201).json(task);
    } 
  } catch (err) {
    res.status(500).json({ message: 'Failed to create new task' });
  }
});

module.exports = router;