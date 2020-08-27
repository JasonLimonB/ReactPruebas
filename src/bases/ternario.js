// Operador ternario

const data = true;

if(data) {
    console.log("Positivo");
}else {
    console.log("Negativo");
}

(data) ? console.log("TernarioPositivo") : console.log("Ternario negativo"); 

const ternarioPeque = ( data ) && 'Activo ternario Peque';

console.log(ternarioPeque)
