const asyncMiddleware = require('../utils/asyncMiddleware');
const storiesService = require('./stories.service');
const router = require('express').Router();

router.get('/stories/all', asyncMiddleware(async (req, res) => {
  await storiesService.storiesAll(req, res)
    .then(data => data)
    .then(stories => res.json(stories))
}));

router.get('/story/:id', asyncMiddleware(async (req, res) => {
  await storiesService.storyByID(req, res)
    .then(story => story)
    .then(data => res.json(data))
}));

router.post('/story/new', asyncMiddleware(async (req, res) => {
  await storiesService.storyNew(req, res)
    .then(data => data)
    .then(newStory => res.json(newStory))
}));

router.put('/story/update/:id', asyncMiddleware(async (req, res) => {
  await storiesService.storyUpdate(req, res)
    .then(data => data)
    .then(storyUpdated => res.json(storyUpdated))
}));

router.delete(`/story/delete/:id`, asyncMiddleware(async (req, res) => {
  await storiesService.storyDelete(req, res)
    .then(data => data)
    .then(deleteStory => res.json(deleteStory))
}));

module.exports = router;
