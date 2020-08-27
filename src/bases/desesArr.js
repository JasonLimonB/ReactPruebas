const [goku, vegueta, gohan] = ["Goku", "Vegueta", "Gohan"];


// Esto lo hacemos ya que recordemos que esto es un arreglo y va por posiciones no por un identificador como lo hacen los objetos
const [ ,p2 ] = ["Goku", "Vegueta", "Gohan"];

// Otra manera de desestructurar arreglos
export const retornaArreglo = () => {
    return ["uno", 2];
}

const [ letras, numeros ] = retornaArreglo();

/*
const useState = ( valor ) => {
    return [ valor, ()=> console.log("Hola mundo") ];
}

const [nombreD, saludo] = useState ('Goku');

saludo();
*/