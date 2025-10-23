const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  if (req.cookies.user) {
    res.send(`Logged in as ${req.cookies.user}`);
  } else {
    res.type('html').send(html);
  }
});

app.post("/submit", (req,res) => {
  const {name} = req.body;

  res.cookie('user', name, {
    maxAge: 1000 * 60 * 15, // 15 minutes
    httpOnly: true
  });

  res
  .type('html')
  .send('hello' + name)

  
})

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Simple form</title>
  </head>
  <body>
    <form method="POST" action="/submit">
      <label>
        Name: <input name="name" type="text" />
      </label>
      <button type="submit">Send</button>
    </form>
  </body>
</html>
`
