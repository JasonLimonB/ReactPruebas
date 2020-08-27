function getUserActive(nombre){
    return {
        uid: "ABC123",
        username: nombre
    }
}

const ejemplo = getUserActive("Jason");


// Esto lo hacemos cuando queremos retornar un objeto explicito, tengamos en cuenta que el return es opcional cuando solo retorna un solo objeto sin hacer operaciones
// es propio de las lambda o funciones flecha
export const getUser = nombre => (
    {
        uid: '123ABC0',
        username: nombre
    }
);

const prueba = getUser("Giovani");
