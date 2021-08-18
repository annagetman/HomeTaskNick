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