import '@testing-library/jest-dom';
import { retornaArreglo } from '../../bases/desesArr';

describe('Desestructuracion de arreglos ', () => {
    
    test('debe retornar un string y un numero ', () => {
        
        const arr = retornaArreglo();

        expect(arr).toEqual(["uno", 2]);

        // Tambien podemos desestructurar el valor que retorna

        const [ letras, numero ] = retornaArreglo();

        expect( typeof letras ).toBe('string');
        expect( typeof numero ).toBe('number');

    });

});