import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ( {saludo, otraProp} ) =>{

    return (
        <>  
            <h1>{ saludo }!!</h1>
            <p id="parrafo" >{otraProp}</p>
        </>
    );
}

PrimeraApp.propTypes= {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    otraProp: ''
}

export default PrimeraApp;