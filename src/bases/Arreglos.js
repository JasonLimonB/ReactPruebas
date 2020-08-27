const arr1 = [1,2,3,4];
console.log(arr1);
const arr2 = [ ...arr1, 5 ];
console.log(arr2);

const arr3 = arr2.map( dato => dato*2 );
console.log(arr3); 