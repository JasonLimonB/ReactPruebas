describe('Pruebas para el archivo demo.test.js', () => {

    test('deben ser iguale slos string ', () => {
    
        const word = 'Hola mundo';
    
        const word2 = `Hola mundo`;
    
        expect( word ).toBe(word2);
    
    })

});
