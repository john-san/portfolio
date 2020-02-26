const express = require('express');
const router = express.Router();
const lowestProjectId = 3;
const projects = require('../data/data.json').projects.slice(lowestProjectId - 1).reverse();
const lastProjectId = projects[0].id;

router.get('/', (req, res) => {
  res.render('index', { projects });
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/projects/:id', (req, res, next) => {
  // convert id from url param to number
  const projectId = parseFloat(req.params.id);

  // run 404 error if id is invalid
  if (projectId > lastProjectId || projectId < lowestProjectId) {
    return next(); 
  }

  const project = projects.find(project => project["id"] === projectId);
  res.render('project', { project });
});

module.exports = router;