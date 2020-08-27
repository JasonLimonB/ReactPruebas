import { heroes } from '../data/heroes';

const getHeroe = (id) =>{
    return heroes.find( dato => dato.id === id  );
};

const getOwner = (owner) =>{
    return heroes.filter( dato => dato.owner === owner );
};

console.log(getHeroe(2));

console.log(getOwner("DC"));