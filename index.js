"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const fixtures = require("./data/fixtures");

let fixturesDB = JSON.parse(JSON.stringify(fixtures));

const HTTP_STATUS_CODE_NOT_FOUND = 404;
const HTTP_STATUS_CODE_FORBIDDEN = 403;
const HTTP_STATUS_CODE_ACCEPTED = 202;
const HTTP_STATUS_CODE_NO_CONTENT = 204;

const getFixtureById = id =>
  fixturesDB.find(fixture => fixture.fixtureId === id);

const getFixtureIndex = id =>
  fixturesDB.findIndex(fixture => fixture.fixtureId === id);

const putFixture = fixture => {
  fixturesDB = fixturesDB.filter(fixtures => fixtures.fixtureId !== fixture.fixtureId);
  fixturesDB.push(fixture);
 }
const randomIntBetweenMinMax = (min, max) =>
  Math.floor(Math.random() * max) + min;

const secondsToMillis = seconds => seconds * 1000;

const updateDelay = () =>
  secondsToMillis(randomIntBetweenMinMax(2, 5));

const postFixture = fixture =>
  setTimeout(() => {
    fixturesDB.push(fixture);
  }, updateDelay());

const checkIfFixtureExists = fixtureId => getFixtureIndex(fixtureId) !== -1;

const fixtureNotFound = res =>
  res.status(HTTP_STATUS_CODE_NOT_FOUND).send();

app.get("/fixtures", (req, res) => res.json(fixturesDB));

app.get("/fixture/:id", (req, res) => {
  const fixtureId = req.params.id;
  checkIfFixtureExists(fixtureId)
    ? res.json(getFixtureById(fixtureId))
    : fixtureNotFound(res);
});

app.put("/fixture", (req, res) => {
  const fixtureId = req.body.fixtureId;
  if (checkIfFixtureExists(fixtureId)) {
    putFixture(req.body);
    res.status(HTTP_STATUS_CODE_NO_CONTENT).send();
  } else {
    fixtureNotFound(res);
  }
});

app.post("/fixture", (req, res) => {
  const fixtureId = req.body.fixtureId;
  if (checkIfFixtureExists(fixtureId)) {
    res.status(HTTP_STATUS_CODE_FORBIDDEN).send();
  } else {
    postFixture(req.body);
    res.status(HTTP_STATUS_CODE_ACCEPTED).send();
  }
});

app.delete("/fixture/:id", (req, res) => {
  const fixtureId = req.params.id;
  if (checkIfFixtureExists(fixtureId)) {
    fixturesDB = fixturesDB.filter(fixtures => fixtures.fixtureId !== fixtureId);
    res.status(HTTP_STATUS_CODE_NO_CONTENT).send();
  } else {
    fixtureNotFound(res);
  }
});

app.listen(3000, () => console.log("Server is listening on port 3000"));
