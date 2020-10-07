const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));

const books = [
  {id: 1, name: 'alice', author: 'jin', description: '엘리스가 집안에서 난동을 부리는 책입니다.'},
];

// show book list
app.get('/books', (req, res) => {
  res.send(JSON.stringify(books));
});

// get book detail information
app.get('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find((e) => e.id === id);
  if (book === undefined) {
    res.send({error: true, message: 'cannot find book'});
  } else {
    res.send(JSON.stringify(book));
  }
});

// create new book
app.post('/books', (req, res) => {
  const {id, title, description} = req.body;
  const book = {id: parseInt(id), title, description};
  books.push(book);

  res.send(book);
});

app.put('/books/:id', (req, res) => {
  // modify book's information
});

app.delete('/books/:id', (req, res) => {
  // delete book
});

app.listen(3001);
console.log('server starts...');
