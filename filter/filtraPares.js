function filtraPares(arr){
    return arr.filter(callback);
}

function callback(item){
    return item % 2 !== 0;
}

const meuArray = [1,23,55,67,30,2,4];

console.log( filtraPares(meuArray));


/*function filtraFrutas(arr){
    return arr.filter(callback);
}

function callback(item){
    return item != "Frutas vermelhas";
}

const meuArray = ["Frutas vermelhas", "Frutas amarelas", "Frutas verdes"];

//const meuArrayFrutas = ["Maça, morango", "Banana, Carambola", "Uva verde, kiwi"];

console.log( filtraFrutas(meuArray));*/