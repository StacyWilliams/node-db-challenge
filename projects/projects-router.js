const express = require('express');

const projects = require('./projects-model.js');

const router = express.Router();

router.get('/data/projects', async (req, res) => {
  try {
    const todos = await projects.findProjects();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get projects' });
  }
}); //endpoint working

router.get('/data/projects/:id/tasks', async (req, res) => {
  try {
    const tasks = await projects.findTasks();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get tasks' });
  }
}); 

router.get('/data/projects/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const todo = await projects.findById(id);

    if (todo) {
      res.json(todo);
    } else {
      res.status(404).json({ message: 'Could not find todo with given id.' })
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to get projects' });
  }
}); //endpoint working

router.get('/data/projects/tasks', async (req, res) => {
  const { id } = req.params;

  try {
    const tasks = await projects.findTasks();

    if (tasks.length) {
      res.json(tasks);
    } else {
      res.status(404).json({ message: 'Could not find task for given project' })
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to get tasks' });
  }
});

router.get('/data/resources', async (req, res) => {
  try {
    const resources = await projects.findResources();
    res.json(resources);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get resources' });
  }
}); 

router.post('/data/projects', async (req, res) => {
  const newProject = req.body;

  try {
    const project = await tasks.addProject(newProject);
    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create new project' });
  }
});

router.post('/data/projects/:id/tasks', async (req, res) => {
  const taskData = req.body;
  const { id } = req.params; 

  try {
    const task = await tasks.findById(id);

    if (project) {
      const task = await projects.addTask(taskData, id);
      res.status(201).json(task);
    } else {
      res.status(404).json({ message: 'Could not find project with given id.' })
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to create new task' });
  }
});

router.put('/data/projects:id', async (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  try {
    const project = await projects.findById(id);

    if (project) {
      const updatedProject = await projects.update(changes, id);
      res.json(updatedProject);
    } else {
      res.status(404).json({ message: 'Could not find project with given id' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to update project' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await projects.remove(id);

    if (deleted) {
      res.json({ removed: deleted });
    } else {
      res.status(404).json({ message: 'Could not find project with given id' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete project' });
  }
});

module.exports = router;