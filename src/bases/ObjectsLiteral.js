let user = {
    name : "Jason",
    age  : 24,
    address : {
        country : 'Mexico',
        street : 'Siempre viva'
    }
}

let user2 = { ...user };
user2.name = "Giovani";
user2.address.country = "Fondo de Bikini";

console.log(user);
console.log(user2);

