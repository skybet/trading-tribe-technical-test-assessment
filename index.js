"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const fixtures = require("./data/fixtures");

let fixturesDB = JSON.parse(JSON.stringify(fixtures));

const HTTP_STATUS_CODE_NOT_FOUND = 404;

const getFixtureById = id =>
  fixturesDB.find(fixture => fixture.fixtureId === id);

const getFixtureIndex = id =>
  fixturesDB.findIndex(fixture => fixture.fixtureId === id);

const randomIntBetweenMinMax = (min, max) =>
  Math.floor(Math.random() * max) + min;

const secondsToMillis = seconds => seconds * 1000;

const betweenOneAndFiveSecondsInMillis = () =>
  secondsToMillis(randomIntBetweenMinMax(1, 5));

const delayPutAction = fixture =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      fixturesDB.push(fixture);
      resolve();
    }, betweenOneAndFiveSecondsInMillis());
  });

const checkIfFixtureExists = fixtureId => getFixtureIndex(fixtureId) !== -1;

const fixtureNotFound = res =>
  res.status(HTTP_STATUS_CODE_NOT_FOUND).send("Fixture not found");

app.get("/fixtures", (req, res) => res.json(fixturesDB));

app.get("/fixture/:id", (req, res) => {
  const fixtureId = req.params.id;
  checkIfFixtureExists(fixtureId)
    ? res.json(getFixtureById(fixtureId))
    : fixtureNotFound(res);
});

app.post("/fixture", async (req, res) => {
  await delayPutAction(req.body);
  res.send("Fixture has been added");
});

app.delete("/fixture/:id", (req, res) => {
  const fixtureId = req.params.id;

  if (checkIfFixtureExists(fixtureId)) {
    fixturesDB = fixturesDB.filter(fixture => fixture.fixtureId !== fixtureId);
    res.send("Fixture has been deleted");
  } else {
    fixtureNotFound(res);
  }
});

app.listen(3000, () => console.log("Server is listening on port 3000"));
