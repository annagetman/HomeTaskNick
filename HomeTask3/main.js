// JavaScript source code
//Task 1:

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

//getNewList(s)

//Task 2:

const room1 = ['XXX', 3];
const room2 = ['XXXXX', 7];
const room3 = ['XXXXXX', 9];
const room4 = ['XXX', 4];

const freeChairCountInTheRoom = 0;


const arrRooms = [room1, room2, room3, room4];

const res = [];
let freeChairSumm = 0;

const findChair = (findChair, needChair) => {
    if (needChair === 0) {
        console.log('Game on');
    }
    findChair.forEach((entry) => {
        const agentCount = entry[0].length;
        const allChair = entry[1];
        const freeChairInCurrentRoom = allChair - agentCount;
       // freeChairSumm += freeChairInCurrentRoom;
        if (needChair >= freeChairInCurrentRoom) {
            res.push(freeChairInCurrentRoom)
        }
        return res
    })
}

findChair(arrRooms, )
console.log(res)


//Task 3:

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

}
