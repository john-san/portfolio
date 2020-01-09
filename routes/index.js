const express = require('express');
const router = express.Router();
const projects = require('../data.json').projects.reverse();

router.get('/', (req, res) => {
  res.render('index', { projects });
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/projects/:id', (req, res, next) => {
  const projectId = parseFloat(req.params.id);

  if (projectId > projects.length || projectId <= 0) {
    return next(); // goes to 404
  }

  const project = projects.find(project => project["id"] === projectId);
  res.render('project', { project });
});

module.exports = router;