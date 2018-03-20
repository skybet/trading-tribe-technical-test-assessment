'use strict';

const fixtures = [
  {
    'fixtureId': '1',
    'fixtureStatus': {
      'displayed': false,
      'suspended': true
    },
    'footballFullState': {
      'homeTeam': 'Dagenham & Redbridge',
      'awayTeam': 'Österreich',
      'finished': false,
      'gameTimeInSeconds': 2656,
      'goals': [
        {
          'clockTime': 640,
          'confirmed': true,
          'id': 678606,
          'ownGoal': false,
          'penalty': false,
          'period': 'FIRST_HALF',
          'playerId': 560617,
          'teamId': '1'
        },
        {
          'clockTime': 864,
          'confirmed': true,
          'id': 164002,
          'ownGoal': false,
          'penalty': false,
          'period': 'FIRST_HALF',
          'playerId': 60817,
          'teamId': '2'
        },
        {
          'clockTime': 1312,
          'confirmed': true,
          'id': 267245,
          'ownGoal': false,
          'penalty': false,
          'period': 'FIRST_HALF',
          'playerId': 136629,
          'teamId': '1'
        },
        {
          'clockTime': 1760,
          'confirmed': true,
          'id': 758030,
          'ownGoal': false,
          'penalty': false,
          'period': 'FIRST_HALF',
          'playerId': 131840,
          'teamId': '2'
        }
      ],
      'period': 'SECOND_HALF',
      'possibles': [],
      'corners': [],
      'redCards': [],
      'yellowCards': [],
      'startDateTime': '2018-03-20T10:49:38.655Z',
      'started': true,
      'teams': [
        {
          'association': 'HOME',
          'name': 'Dagenham-&-Redbridge',
          'teamId': 'HOME'
        },
        {
          'association': 'AWAY',
          'name': 'Österreich',
          'teamId': 'AWAY'
        }
      ]
    },
  },
  {
    'fixtureId': '2',
    'fixtureStatus': {
      'displayed': true,
      'suspended': false
    },
    'footballFullState': {
      'homeTeam': 'Manchester United',
      'awayTeam': 'Leeds United',
      'finished': false,
      'gameTimeInSeconds': 900,
      'goals': [
        {
          'clockTime': 640,
          'confirmed': true,
          'id': 678606,
          'ownGoal': false,
          'penalty': false,
          'period': 'FIRST_HALF',
          'playerId': 560617,
          'teamId': '1'
        },
        {
          'clockTime': 864,
          'confirmed': true,
          'id': 164002,
          'ownGoal': false,
          'penalty': false,
          'period': 'FIRST_HALF',
          'playerId': 60817,
          'teamId': '2'
        },
      ],
      'period': 'FIRST_HALF',
      'possibles': [],
      'corners': [],
      'redCards': [],
      'yellowCards': [],
      'startDateTime': '2018-03-20T10:49:38.655Z',
      'started': true,
      'teams': [
        {
          'association': 'HOME',
          'name': 'Manchester-United',
          'teamId': 'HOME'
        },
        {
          'association': 'AWAY',
          'name': 'Leeds-United',
          'teamId': 'AWAY'
        }
      ]
    },
  },
  {
    'fixtureId': '3',
    'fixtureStatus': {
      'displayed': false,
      'suspended': true
    },
    'footballFullState': {
      'homeTeam': 'Garforth FC',
      'awayTeam': 'York FC',
      'finished': false,
      'gameTimeInSeconds': 950,
      'goals': [
        {
          'clockTime': 640,
          'confirmed': true,
          'id': 678606,
          'ownGoal': false,
          'penalty': false,
          'period': 'FIRST_HALF',
          'playerId': 560617,
          'teamId': '1'
        },
      ],
      'period': 'FIRST_HALF',
      'possibles': [],
      'corners': [],
      'redCards': [],
      'yellowCards': [],
      'startDateTime': '2018-03-20T10:49:38.655Z',
      'started': true,
      'teams': [
        {
          'association': 'HOME',
          'name': 'Garforth-FC',
          'teamId': 'HOME'
        },
        {
          'association': 'AWAY',
          'name': 'York-FC',
          'teamId': 'AWAY'
        }
      ]
    },
  },
];

module.exports = fixtures;