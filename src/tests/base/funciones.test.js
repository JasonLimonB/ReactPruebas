import '@testing-library/jest-dom';

import { getUser }  from '../../bases/funciones';


describe('Testing de funciones ', () => {

    test('debe retornar algo :v ', () => {

        const testingUser = {
            uid: '123ABC0',
            username: "Jason"
        }

        const user = getUser('Jason');

        expect( user ).toEqual( testingUser );

    });

    // Otra manera de realizar la prueba es la siguiente

    test('Otra manera de hacer la prueba ', () => {
        const nombre = "Jason";
        const user = getUser(nombre);

        expect( user ).toEqual({
            uid: '123ABC0',
            username: nombre
        })

    }); 

});