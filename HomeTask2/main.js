// JavaScript source code
//Задача 1:

//Напишите функцию, которая принимает целое положительное число и возвращает его в виде римской цифры в формате строки.


const getRomaNum = (num) => {
    const romaNum = new Map();

    romaNum.set(1, 'I');
    romaNum.set(2, 'II');
    romaNum.set(3, 'III');
    romaNum.set(4, 'IV');
    romaNum.set(5, 'V');
    romaNum.set(6, 'VI');
    romaNum.set(7, 'VII');
    romaNum.set(8, 'VIII');
    romaNum.set(9, 'IX');
    romaNum.set(10, 'X');

    return romaNum.get(num)
}

console.log(getRomaNum(5))

//    Задача 2:

//Напишите функцию, которая принимает 3 аргумента:

//число
//из какой единицы
//в какую единицу
//и переводит из одной системы в другую.Пример:

//converter(100, ‘c’, ‘f’) // return 212


//И возвращает число.

//Что должна уметь обрабатывать:

//Цельсии, Фаренгейты, Кельвины
//единицы измерения длины


let arrLength = ['km', 'm', 'sm'];
let arrTemperature = ['F', 'C', 'K'];

const getlength = (num, from, to) => {
    if (from == 'm' && to == 'sm') {
        return num * 100 + ' sm'
    }
    if (from == 'm' && to == 'km') {
        return num / 1000 + ' km'
    }
    if (from == 'km' && to == 'm') {
        return num * 1000 + ' km'
    }
    if (from == 'sm' && to == 'm') {
        return num / 100 + ' m'
    }
    if (from == 'm' && to == 'sm') {
        return num * 100 + ' m'
    }
}

const getFaringeit = (num, from, to) => {
    if (from == 'F' && to == 'C') {
        return (num - 32) / 1.8 + ' C'
    }
    if (from == 'K' && to == 'C') {
        return num - 273.15 + ' C'
    }
    if (from == 'C' && to == 'F') {
        return num * 1.8 + ' F'
    }
}

const convertUnits = (num, from, to) => {
    if (arrLength.includes(from)) {
        console.log(getlength(num, from, to));
    }
    if (arrTemperature.includes(from)) {
        console.log(getFaringeit(num, from, to))
    }
}
console.log(convertUnits(18, 'C', 'F'))
//console.log(arrLength.includes('m'));