// JavaScript source code
//Task 1:
//Meeting
//John has invited some friends.His list is:

//s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

//Could you make a program that

//makes this string uppercase
//gives it sorted in alphabetical order by last name.

//When the last names are the same, sort them by first name.Last name  and first name of a guest come in the result between parentheses separated by a comma.

//So the result of function meeting(s) will be:

//"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"

//It can happen that in two distinct families with the same family name two people have the same first name too.

const s = "Fred:Corwill;Wilfred:Corwill;Barney:Aornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Worwill";

const getNewList = (str) => {

    const upperStr = str.toLocaleUpperCase();
    const re = /\s*;\s*/;
    const dd = /\s*:\s*/;
    const splitArr = upperStr.split(re);
    const sortArr = splitArr.sort();
    let newStr = [];

    for (i = 0; i < splitArr.length; i++) {
        newStr += `(${(splitArr[i].split(dd).reverse())})` 
    }
    console.log(newStr)
}

getNewList(s)

//Task 2:
//Find a Chair
//So you've found a meeting room - phew! You arrive there ready to present, and find that someone has taken one or more of the chairs!!
//You need to find some quick....check all the other meeting rooms to see if all of the chairs are in use.
//Your meeting room can take up to 8 chairs.need will tell you how many have been taken.You need to find that many.
//Find the spare chairs from the array of meeting rooms.Each meeting room array will have the number of occupants as a string.Each occupant is represented by 'X'.
//The room array will also have an integer telling you how many chairs there are in the room.
//You should return an array of integers that shows how many chairs you take from each room in order, up until you have the required amount.
//    example: [['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX', 2]] when you need 4 chairs:
//result-- > [0, 1, 3](no chairs free in room 0, take 1 from room 1, take 3 from room 2. No need to consider room 4 as you have your 4 chairs already.
//If you need no chairs, return 'Game On'.If there aren't enough spare chairs available, return 'Not enough!'
//Examples:

//meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4)-- -> [0, 1, 3]
//meeting([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5)-- -> [0, 0, 1, 2, 2]
//meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0)-- -> 'Game On'






//Task 3:
//Given a number of points on a plane, your task is to find two points with the smallest distance between them.
//Each points will be represented as an array with 2 coordinates.
//For the plane above, the input will be:
//The two points that are closest to each other are D and F.Expected answer should be an array with both points in any order. [[6, 3], [7, 4]] or[[7, 4], [6, 3]] are valid answers
//for the example above.

const mapPoints = [
    [2, 2], // A
    [2, 8], // B
    [5, 5], // C
    [6, 3], // D
    [6, 7], // E
    [7, 4], // F
    [7, 9]  // G
]

const getPoint = () => {
    for (i = 0; i < mapPoints.length; i++) {
        console.log(mapPoints[i])
        console.log('pppp')
    }
}
