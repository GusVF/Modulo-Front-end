const { getPokemonDetails } = require('./pkmSearch.js');


describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokémon que não existe no banco de dados', (done) => {
    const expecting = new Error('Não temos esse pokémon para você :()');
    getPokemonDetails('Pikachu', (error, _message) => {
      try {
        expect(error).toEqual(expecting);
        done()
      } catch (error) {
        done(error);
      }
    });
  });

  it('retorna um pokémon que existe no banco de dados', (done) => {
    const expectedString = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';

    getPokemonDetails('Charmander', (_error, result) => {
      try {
        expect(result).toBe(expectedString);
        done();
      } catch (error) {
        done(error);
      }
    })
  });
});
