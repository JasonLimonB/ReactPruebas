import { heroes } from '../complementos/heroes';

const buscarHeroe = (id) => heroes.find( datos => {
    console.log(id);
    console.log(datos.id)
} );

export {
    buscarHeroe
}