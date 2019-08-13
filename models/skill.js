const skills = [
    {skill: 'Javascript', years: 1},
    {skill: 'HTML', years: 3},
    {skill: 'CSS', years: 3}
  ];
  
  module.exports = {
    getAll,
    getOne
  };
  
  function getOne(id) {
    return todos[id];
  }
  
  function getAll() {
    return todos;
  }