// A função getPlanet abaixo imprime o planeta Marte de forma síncrona. Modifique a função getPlanet, de forma que Marte seja impresso assincronamente, após 4 segundos.

const FOUR_SECONDS = 4000;

const getPlanet = () => {
  setTimeout(() => {
  const mars = {
    name: 'Mars',
    distanceFromSun: {
      value: 227900000,
      measurementUnit: 'kilometers',
    },
  };
  console.log('Returned planet: ', mars);
}, FOUR_SECONDS );
};

getPlanet(); // Imprime Marte depois de 4 segundos