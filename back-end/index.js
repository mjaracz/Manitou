const parser = require('body-parser');
const routes = require('./stories/stories.routes.js');
const userRoutes = require('./users/user.routes');
const cors = require('cors');

const express = require('express');

const app = express();
const http = require('http').Server(app);

const port = process.env.PORT || 8080;

app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use('/api', routes);
app.use('/api/user', userRoutes);
app.use((req, res) => {
  res.status(404)
});

http.listen(port, () => {
  console.log('server started on port ' + port)
});

module.exports = app;
