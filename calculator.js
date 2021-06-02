
const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const sum = function (array) {

    let result = 0;
    array.forEach((e) => result = result + e);

    return result;

};

const multiply = function (array) {

    /* [n] = n
        [n,m] = n*m 
        [n,m,l,i,k] = n*m...*k  

        
        array.forEach( (valor, indice ){
            if( indice == 0){
                aqi empieza, se debe guardar el valor una sola vez en
                resultado = valor; // es decir el 'n'
            }
            else {
                del 1 en adelante, debemos
                resultado = resultado * valor; // en la segunda iteracion resultado valor 'n' y valor vale 'm'
            }
        })
    */

    let res = 0;
    array.forEach( (currentValue, indez ) => {
        if( indez == 0 ){
            res = currentValue;
        }
        else {
            res = res * currentValue;
        }
    });
    return res;
};

const power = function (a, b) {
    return a ** b;
};

const factorial = function (a) {
    let result = 1;
    for (let i = 1; i <= a; i++) {
        result = i * result;
    }
    return result;
};

module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
};