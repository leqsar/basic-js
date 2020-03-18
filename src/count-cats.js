module.exports = function countCats(array) {
    let newArray = [];
    let sum = 0;
    array.map((elem) => {
        elem.forEach((e) => newArray.push(e));
    })
    newArray.forEach((elem) => {
        if(elem == '^^') sum = sum+1;
    })
    return sum;
};
