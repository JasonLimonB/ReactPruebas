import { heroes } from '../complementos/heroes';

const buscarHeroe = (id) => heroes.find( datos => datos.id === id );

export {
    buscarHeroe
}