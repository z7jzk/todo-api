var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
  id: 1,
  description: "Meet mom for lunch",
  completed: false
}, {
  id: 2,
  description: "Get groceries",
  completed: false
}, {
  id: 3,
  description: "Go to Metallica concert",
  completed: true
}];

app.get('/', function (req, res) {
  res.send('Todo API Root');
});

// GET /todos
app.get('/todos', function (req, res) {
  res.json(todos);
});
// GET /todos/:id
app.get('/todos/:id', function (req, res) {
  var todoId = parseInt(req.params.id, 10);
  var item;
  
  for (var i=0;i<todos.length;i++) {
    if (todos[i].id == todoId) {
      item = todos[i];
    }
  }
  
  if (item) {
    res.json(item);
  } else {
    res.status(404).send();
  }
});

app.listen(PORT, function () {
  console.log('Express listening on port ' + PORT + '!');
})