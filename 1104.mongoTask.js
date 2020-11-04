const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ghostman:<password>@cluster0.eysd2.mongodb.net/Cluster0?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

const Task = mongoose.model('Task',
  {
    title: String,
    description: String,
    dueDate: String,
  },
);


const app = express();


app.use(express.urlencoded({extended: true}));

app.get('/tasks', async (req, res) => {
  const tasks = await Task.find();
  res.send(tasks);
});


// tasks/1 => 0번째 task를 가져오는 함수
app.get('/tasks/:id', async (req, res) => {
  const id = req.params.id;
  const task = await Task.findById(id);
  if (!task) {
    return res.sendStatus(404);
  }

  res.send(task);
});

// title, description, dueDate
app.post('/tasks', async (req, res) => {
  const {title, description, dueDate} = req.body;
  const task = new Task({title, description, dueDate});
  await task.save();

  res.send(task);
});

// ?author=kim&page=1
app.put('/tasks/:id', async (req, res) => {
  const id = req.params.id;
  const task = await Task.findById(id);

  if (!task) {
    return res.sendStatus(404);
  }

  const {title, description, dueDate} = req.body;
  task.title = title;
  task.description = description;
  task.dueDate = dueDate;

  await task.save();

  res.send(task);
});

app.delete('/tasks/:id', async (req, res) => {
  const id = req.params.id;
  const task = await Task.findById(id);

  if (!task) {
    return res.sendStatus(404);
  }
  await task.delete();

  res.sendStatus(200);
});

app.listen(3000);
