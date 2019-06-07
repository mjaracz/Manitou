const parser = require('body-parser');
const routes = require('./stories/stories.routes.js');
const userRoutes = require('./users/user.routes');

const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use('/api', routes);
app.use('/user', userRoutes);
app.use((req, res) => {
  res.send(JSON.stringify({"message": "route not handler"}));
  res.status(404);
});

app.listen(port, () => {
  console.log("server started on port " + port)
});

module.exports = app;
