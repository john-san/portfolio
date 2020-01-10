const express = require('express');
const router = express.Router();
const projects = require('../data/data.json').projects.reverse();

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
  if (projectId > projects.length || projectId <= 0) {
    return next(); 
  }

  const project = projects.find(project => project["id"] === projectId);
  res.render('project', { project });
});

module.exports = router;