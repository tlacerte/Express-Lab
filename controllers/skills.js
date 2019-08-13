var Skill = require('../models/skill');

module.exports = {
  index,
  show
};

function show(req, res) {
  res.render('todos/show', {
    todo: Skill.getOne(req.params.id),
    todoNum: parseInt(req.params.id) + 1
  });
}

function index(req, res) {
  res.render('todos/index', {
    todos: Skill.getAll()
  });
}