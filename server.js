var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [];
var todoNextId = 1;
var bodyParser = require('body-parser');

app.use(bodyParser.json());

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

// POST
app.post('/todos', function (req, res) {
  var body = req.body;
  
  // add id field
  body.id = todoNextId++;
  
  // push body in to the array
  todos.push(body);
  
  res.json(body);
});

app.listen(PORT, function () {
  console.log('Express listening on port ' + PORT + '!');
})