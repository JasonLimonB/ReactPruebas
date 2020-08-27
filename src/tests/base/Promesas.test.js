import '@testing-library/jest-dom';
import {getHeroeByIdAsync} from '../../promesas/09-promesas';
import { heroes } from '../../complementos/heroes';

describe('Promesas async', () => {

    // Una vez que usamos las pruebas en asyncronas usamos Done para indicar que ya no se hara mas indicaciones
    test('retornar un heroe async ', ( done ) => {
        
        const id = 2;

        getHeroeByIdAsync(id).then( h => {
            expect( h ).toBe( heroes[1] );
            done();
        })

    });
/*
    test('debe mandar mensaje de no encontrado ', ( done ) => {
        const id = 10;

        getHeroeByIdAsync(id)
            .catch( err =>{
                console.log(err )
                expect( err ).toBe("No se pudo encontrar el héroe");
            });

    });
*/
});