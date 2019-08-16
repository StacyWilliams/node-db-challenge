// router.get('/data/projects/:id', async (req, res) => {
//   const { id } = req.params;

//   try {
//     const todo = await projects.findById(id);

//     if (todo) {
//       res.json(todo);
//     } else {
//       res.status(404).json({ message: 'Could not find todo with given id.' })
//     }
//   } catch (err) {
//     res.status(500).json({ message: 'Failed to get projects' });
//   }
// }); //endpoint works

// router.get('/data/projects/:id/tasks', async (req, res) => {
//   try {
//     const tasks = await projects.findTasks(id);
//     res.json(tasks);
//   } catch (err) {
//     res.status(500).json({ message: 'Failed to get tasks' });
//   }
// });


router.put('/data/projects/:id', async (req, res) => {
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

// router.delete('/:id', async (req, res) => {
//   const { id } = req.params;

//   try {
//     const deleted = await projects.remove(id);

//     if (deleted) {
//       res.json({ removed: deleted });
//     } else {
//       res.status(404).json({ message: 'Could not find project with given id' });
//     }
//   } catch (err) {
//     res.status(500).json({ message: 'Failed to delete project' });
//   }
// });

 function findTasksById(id) {
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
