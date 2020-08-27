const persona = {nombre: "Jake", edad: 24, profesion: "Software developer", clave: 'Iron man'};

//const { nombre, profesion, edad } = persona;
// no importa el orden

//console.log(nombre);
//console.log(edad);
//console.log(profesion);


// En una funcion

const getPersona = ( {nombre, edad, profesion = "programador"} ) =>{
    console.log(nombre);
    console.log(edad);
    console.log(profesion);
};

getPersona(persona);

const useContext = ( {clave, nombre, edad, rango} ) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            latitud: 400,
            logitud: 200
        }
    }
};
const { nombreClave, anios,latlng } = useContext( persona );

console.log(nombreClave, anios, latlng);