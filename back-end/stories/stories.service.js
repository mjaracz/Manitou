const doIdExists = require('../utils/doIdExists');
const generateKey = require('../utils/generateKey');

const JSONdb = require('node-json-db');
const db = new JSONdb('stories', true, false);


async function storiesAll(req, res) {
  try {
    return await db.getData('/');
  } catch (e) {
    res.statusMessage = e.message;
    res.status(400).send(e.message);
  }
}

async function storyByID(req, res) {
  try {
    const data = await db.getData('/data');
    doIdExists(req, data);

    return await db.getData(`/data[${req.params.id}]`);
  } catch (e) {
    res.statusMessage = e.message;
    res.status(400).send(e.message);
  }
}

async function storyNew(req, res) {
  const data = await db.getData('/data');
  const key = generateKey(data, res);

  const dbPushGen = function* () {
    db.push(`/data[${data.length}]`, {
      "ID": key,
      "title": req.body.title,
      "username": req.body.username,
      "body": req.body.body
    }, true);
  };
  const newStory = dbPushGen();
  if (newStory.next().done)
    return await db.getData(`/data[${data.length - 1}]`)
}

async function storyUpdate(req, res) {
  const data = await db.getData('/data');
  const key = generateKey(data, res);

  const update = function* () {
    db.push(`/data[${req.params.id}]`, {
      "ID": key,
      "title": req.body.title,
      "username": req.body.username,
      "body": req.body.body
    }, true)
  };

  if (update.next().done) {
    return await db.get(`/data[${req.params.id}]`);
  }
}

async function storyDelete(req, res) {
  try {
    const data = await db.getData('/data');
    doIdExists(req, data);

    const resGen = function* () {
      return db.getData(`/data[${req.params.id}]`);
    };
    const response = resGen();
    if (response.next().done) {
      await db.delete(`/data[${req.params.id}]`);
      return response.next().value;
    }
  } catch (e) {
    console.error(e);
    res.status(400).send(e);
  }
}

module.exports = {
  storyUpdate,
  storyDelete,
  storiesAll,
  storyByID,
  storyNew
};
