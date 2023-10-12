'use strict';

const readPokemonCard = require('./index.js');

describe('Testing the readPokemonCard lambda', () => {
  it('Should return a list of pokemon', async () => {
    let response = await readPokemonCard.handler({});

    expect(response.statusCode).toEqual(200);
    expect(response.body).toBeTruthy();
  });
});
