import React, { useState } from 'react';
import PropTypes from 'prop-types';

const InputForm = ({ getWeather }) => {
  const [input, setInput] = useState('');

  const handleChange = event => {
    setInput(event.target.value);
  };

	const handleSubmit = event => {
		event.preventDefault();
		getWeather(input);
		setInput('');
	}

  return (
    <form className='input-form' onSubmit={handleSubmit}>
      <input
        type='text'
        className='input-field'
        placeholder='Enter city name...'
        value={input}
        onChange={handleChange}
      />
    </form>
  );
};

InputForm.propTypes = {
	getWeather: PropTypes.func.isRequired
}

export default InputForm;
