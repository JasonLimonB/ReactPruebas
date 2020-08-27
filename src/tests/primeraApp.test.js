import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import PrimeraApp from '../primeraApp';


describe('Prueba en <PrimerApp /> ', () => {
    
/*
    test('Debe devovler una mensaje ', () => {
        
        const saludo = "Hey google";

        const { getByText } = render(<PrimeraApp saludo = {saludo} />);

        expect( getByText(saludo) ).toBeInTheDocument();

    });
*/
    test('Debe mostrar la prop que se le manda ', () => {
        const saludo = "Hey google";
        const wrapper = shallow( <PrimeraApp saludo = {saludo} /> );

        expect( wrapper ).toMatchSnapshot();

    });

    test('debe mostrar la prop otraProp ', () => {
        const saludo = "Hey Google";
        const otraProp = "Soy otra prop jiji";
        const wrapper = shallow( <PrimeraApp  saludo={saludo} otraProp={otraProp} /> );

        //Si queremos buscar una etiqueta solo pasamos el ag tal cual del html o si es un id #id o una clase .clase
        // cuando usamos texto va a extraer el texto del id para hacer la comparacion4
        
        const otra = wrapper.find('#parrafo').text();
        console.log(otra);
        expect( otra ).toBe(otraProp);

    });
    

});