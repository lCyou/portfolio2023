const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// データベースの代わりに、一時的にメモリ内にデータを保存する
const users = {};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// POST /signup
app.post('/signup', (req, res) => {
  const { username, password, nickname } = req.body;

  // ユーザー名が6文字以上20文字以内で、パスワードが8文字以上20文字以内であることを検証する
  if (username.length < 6 || username.length > 20 || password.length < 8 || password.length > 20) {
    return res.status(400).send({ message: 'Invalid username or password' });
  }

  // ユーザー名がすでに登録されているかを確認する
  if (users[username]) {
    return res.status(409).send({ message: 'Username already exists' });
  }

  // ユーザーを作成する
  users[username] = {
    username,
    password,
    nickname: nickname || username,
    comment: null
  };

  res.status(201).send({ message: 'User created' });
});

// GET /users/:user_id
app.get('/users/:user_id', (req, res) => {
  const { user_id } = req.params;
  const user = users[user_id];

  if (!user) {
    return res.status(404).send({ message: 'User not found' });
  }

  res.send(user);
});

// PATCH /users/:user_id
app.patch('/users/:user_id', (req, res) => {
  const { user_id } = req.params;
  const { nickname, comment } = req.body;
  const user = users[user_id];

  if (!user) {
    return res.status(404).send({ message: 'User not found' });
  }

  // ニックネームが30文字以内であることを検証する
  if (nickname && nickname.length > 30) {
    return res.status(400).send({ message: 'Nickname is too long' });
  }

  // コメントが100文字以内であることを検証する
  if (comment && comment.length > 100) {
    return res.status(400).send({ message: 'Comment is too long' });
  }

  // ニックネームとコメントを更新する
  user.nickname = nickname || user.username;
  user.comment = comment || null;

  res.send(user);
});

// POST /close
app.post('/close', (req, res) => {
  const { username } = req.body;
  const user = users[username];

  if (!user) {
    return res.status(404).send({ message: 'User not found' });
  }

  // ユーザーを削除する
  delete users[username];

});