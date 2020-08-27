import React from 'react';
import '@testing-library/dom';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Test de componetn <CounterApp />', () => {
   
    

    test('realizando prueba de props ', () => {

        const wrapper = shallow( <CounterApp /> );

        expect( wrapper ).toMatchSnapshot();

    });

    test('mandando el valor a la prop ', () => {
        
        const wrapper = shallow( <CounterApp value={10} /> );
        const couneter = wrapper.find('#contador').text().trim();
        
        expect( couneter ).toBe('10');

    });

    // Ahora en adelante las pruebas van a ser para simular click en los botones
    // se tomara por la posicion de los botones ya que no tienen un id para identificarlos

    test('simulando click +1', () => {
        const wrapper = shallow(<CounterApp value={10}/>);
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('#contador').text().trim();

        expect( counterText ).toBe('11');

    });

    // Realizar la prueba del boton de restar
    test('simalacion de click -1', () => {
        const wrapper = shallow(<CounterApp value={10}/>);
        wrapper.find('button').at(1).simulate('click');

        const counterText = wrapper.find('#contador').text().trim();

        expect( counterText ).toBe('9');

    });


    // Ahora la prueba será para resetear al valor indicado y haga su funcion
    test('debe resetear el valor', () => {
        const wrapper = shallow(<CounterApp value={10}/>);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(2).simulate('click');

        const counterText = wrapper.find('#contador').text().trim();

        expect( counterText ).toBe( '10' );

    });

});
