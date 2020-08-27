import { buscarHeroe } from '../complementos/buscadorHeroes';



const promesa = new Promise( (resolve, reject) =>{
    setTimeout( ()=>{

        const heroe = buscarHeroe(4);
        resolve(heroe);
    }, 1500 )
} );
