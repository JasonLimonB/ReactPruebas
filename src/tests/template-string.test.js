import '@testing-library/jest-dom';

import { saludar } from '../bases/template-string'

describe('Template string ', () => {
    test('debe retornar un saludo', () => {
        const nombre = "Jason";
        
        const saludo = saludar(nombre);

        expect(saludo).toBe( 'Hola Jason' );

    });

    //Cuando no se manda un argumento debe devolver un Hola Giovani

    test('Mandando sin atgument', () => {
        const saludo = saludar();

        expect(saludo).toBe( 'Hola Giovani' );

    });

});