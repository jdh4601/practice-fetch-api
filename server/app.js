const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors()); // to prevent cors errer
app.use(express.json()); // parsing application json
app.use(express.urlencoded({ extended: true })); // for parsing

const todoList = [
  {
    id: 1,
    content: 'work out',
    done: true,
  },
];

app.get('/api/todo', (req, res) => {
  return res.json(todoList);
});

app.post('/api/todo', (req, res) => {
  const { content, done } = req.body;
  todoList.push({
    id,
    content,
    done,
  });
  return res.send('success!');
});

app.listen(4000, () => {
  console.log('start!!');
});
