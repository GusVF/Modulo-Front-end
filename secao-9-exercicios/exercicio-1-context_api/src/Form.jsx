import React, { useEffect, useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');
  const [module, setModule] = useState();

  useEffect(() => {
    const intervalId = setInterval(() => {
      document.title = (new Date().toLocaleTimeString())
    }, 1000);

    return () => {
      clearInterval(intervalId)
  };
  }, []);

  return (
    <form>
      <fieldset>
        <legend>Dados pessoais</legend>
        <label htmlFor='name'>
          Nome completo
          <input
            type='text'
            id='name'
            name='name'
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </label>
        <label htmlFor='age'>
          Idade
          <input
            type='number'
            id='age'
            name='number'
            value={age}
            onChange={({ target }) => setAge(target.value)}
          />
        </label>
        <label htmlFor='location'>
          Cidade/UF
          <input
            type='text'
            id='location'
            name='location'
            value={location}
            onChange={({ target }) => setLocation(target.value)}
          ></input>
        </label>
      </fieldset>
      <fieldset>
        <legend>Modulo</legend>
        <label htmlFor='fundamentos'>
          Fundamentos
          <input
            type='radio'
            id='fundamentos'
            name='fundamentos'
            value='Fundamentos'
            checked={module === 'Fundamentos'}
            onChange={({ target }) => setModule(target.value)}
          />
        </label>
        <label htmlFor='front-end'>
          Front-end
          <input
            type='radio'
            id='front-end'
            name='front-end'
            value='Front-end'
            checked={module === 'Front-end'}
            onChange={({ target }) => setModule(target.value)}
          />
        </label>
        <label htmlFor='back-end'>
          Back-end
          <input
            type='radio'
            id='back-end'
            name='back-end'
            value='Back-end'
            checked={module === 'Back-end'}
            onChange={({ target }) => setModule(target.value)}
          />
        </label>
        <label htmlFor='cs'>
          Ciência da computação
          <input
            type='radio'
            id='cs'
            name='module'
            value='Ciência da computação'
            checked={module === 'Ciência da computação'}
            onChange={({ target }) => setModule(target.value)}
          />
        </label>
      </fieldset>
      <button
      type="submit"
      onClick={ (event) => {
        event.preventDefault();
        console.log('click');
      }}
      >
        Enviar
      </button>
    </form>
  );
}

export default Form;
