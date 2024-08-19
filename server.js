const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let books = [
  { id: 1, title: 'SCUT', author: 'IAN', year_published: 1925 },
  { id: 2, title: 'ZX4', author: 'Pat', year_published: 1960 }
];

// 獲取所有書籍
app.get('/books', (req, res) => {
  res.json(books);
});

// 獲取特定書籍
app.get('/books/:id', (req, res) => {
  const book = books.find(b => b.id == req.params.id);
  if (book) {
    res.json(book);
  } else {
    res.status(404).send({ message: 'Book not found' });
  }
});

// 新增一本書
app.post('/books', (req, res) => {
  const newBook = { id: books.length + 1, ...req.body };
  books.push(newBook);
  res.status(201).json(newBook);
});

// 更新一本書
app.put('/books/:id', (req, res) => {
  const bookIndex = books.findIndex(b => b.id == req.params.id);
  if (bookIndex !== -1) {
    books[bookIndex] = { id: parseInt(req.params.id), ...req.body };
    res.json(books[bookIndex]);
  } else {
    res.status(404).send({ message: 'Book not found' });
  }
});

// 刪除一本書
app.delete('/books/:id', (req, res) => {
  const bookIndex = books.findIndex(b => b.id == req.params.id);
  if (bookIndex !== -1) {
    books.splice(bookIndex, 1);
    res.send({ message: 'Book deleted successfully' });
  } else {
    res.status(404).send({ message: 'Book not found' });
  }
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}/`);
});
