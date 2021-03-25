import React, { useState } from 'react';
import PropTypes from "prop-types";

const CounterApp = ({ value  = 10}) => {
    const [count, setCount] = useState(value);

  const handleAdd = (e) =>{
      setCount(count + 1)
      //setCount( (c)=> c + 1)
  }
  const  handleReset = (e) => {
      setCount(value)
  }
  const handleSubstract = (e) => {
      setCount(count -1)

  }


    return (
    <>
      <h1>CounterApp 4</h1>
      <p> {count}</p>
        <button onClick={ handleAdd }> +1 </button>
        <button onClick={ handleReset }> Reset </button>
        <button onClick={ handleSubstract }> -1 </button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};
CounterApp.defaultProps = {
  value: 1,
};

export default CounterApp;
