'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const fixtures = require('./data/fixtures');

const HTTP_STATUS_CODE_NOT_FOUND = 404;

const getFixtureById = (id) => fixtures.find((fixture) => fixture.fixtureId === id);
const randomIntBetweenMinMax = (min, max) => Math.floor(Math.random() * max) + min;
const secondsToMillis = (seconds) => seconds * 1000;
const betweenOneAndFiveSecondsInMillis = () => secondsToMillis(randomIntBetweenMinMax(1, 5));

const delayPutAction = (fixture) => new Promise((resolve, reject) => {
  setTimeout(() => {
    fixtures.push(fixture);
    resolve();
  }, betweenOneAndFiveSecondsInMillis());
});

app.get('/fixtures', (req, res) => res.json(fixtures));

app.get('/fixture/:id', (req, res) => {

  const fixture = getFixtureById(req.params.id);
  fixture ? res.json(fixture) : res.status(HTTP_STATUS_CODE_NOT_FOUND).send('Fixture not found');

});

app.put('/fixture/:id', async (req, res) => {

  await delayPutAction(req.body);
  res.send('Fixture has been added');

});

app.listen(3000, () => console.log('Server is listening on port 3000'));