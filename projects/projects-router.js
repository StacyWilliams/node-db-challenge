const express = require('express');
const router = express.Router();
const helpers = require('./projects-model');



router.get('/data/projects', async (req,res) => {
    try{
        const projects = await helpers.findProjects();
         res.json(projects);
    }catch (err) {
        res.status(500).json({ message : "Failed to get projects"})
    }
    
}); //enpoint works

router.get('/data/tasks', async (req,res) => {
    
    const completed = req.params.completed
    if( completed === 0 ){
        return({'...completed : false'})
    }else{
        return({'...tasks.completed : true'})
    }
    
    try{
     const tasks = await helpers.findTask(completed);
         res.status(200).json(tasks);
      }
    catch(error)  {
          res.status(500).json({ message: 'failed to get tasks'})
      }
 })
  

  
    // try{
    //      db.tasks = await helpers.findTasks();
    //      res.json(tasks);
    // }catch (err) {
    //     res.status(500).json({ message : "Failed to get tasks"})
    
    // }


 //enpoint works it did before I tried to dicate what rendered 

router.get('/data/resources', async (req,res) => {
    try{
        const resources = await helpers.findResources();
         res.json(resources);
    }catch (err) {
        res.status(500).json({ message : "Failed to get resources"})
    }
    
}); //enpoint works

router.post('/data/resources', async (req, res) => {
    const newResource = req.body;
  console.log(req.body)
    try {
      const resource = await helpers.addResource(newResource);
      res.status(201).json(resource);
    } catch (err) {
      res.status(500).json({ message: 'Failed to create new resource' });
    }
 });//enpoint works
  
  router.post('/data/projects', async (req, res) => {
    const newProject = req.body;
  
    try {
      const todo = await helpers.addProject(newProject);
      res.status(201).json(todo);
    } catch (err) {
      res.status(500).json({ message: 'Failed to create new project' });
    }
  });//enpoint works
  
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
  });//enpoint works
    
  module.exports = router;


