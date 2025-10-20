const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

app.get("/submit", (req,res) => {
  res
  .type('html')
  .send('hello' + req.query["name"])
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
    <form method="GET" action="/submit">
      <label>
        Name: <input name="name" type="text" />
      </label>
      <button type="submit">Send</button>
    </form>
  </body>
</html>
`
