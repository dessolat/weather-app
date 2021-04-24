import React from 'react';

const InputForm = ({ getWeather, handleInput, input }) => (
    <form className='input-form' onSubmit={e => getWeather(e, false)}>
      <input
        type='text'
        className='input-field'
        placeholder='Enter city name...'
        value={input}
        onChange={handleInput}
      />
    </form>
  );

export default InputForm;
