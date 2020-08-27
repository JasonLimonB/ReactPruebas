import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ( {value} ) => {
    
    
    const [ counter, setCounter ] = useState( value );
 
    const sumar = ()=>{
        setCounter( counter + 1 );
    }
    const restar = () =>{
        setCounter( counter - 1 );
    }
    const reset = () =>{
        setCounter( value );
    }

    return (
        <>
            <h1>Counter app</h1>
            <p id="contador">{ counter }</p>
            <button onClick={sumar} className="btn"> Sumar </button>
            <button onClick={restar} className="btn"> Restar </button>
            <button onClick={reset} className="btn"> Reset </button>
        </>
    );
}

CounterApp.protoTypes = {
    value: PropTypes.number
}

export default CounterApp;

