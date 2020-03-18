module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) {
        return false;
    }
    let g = members.reduce((acc, elem) => {
        if (typeof(elem) !== 'string') {
            return acc+'';
        }
        if(elem.__proto__ === Object.prototype) {
            return acc + elem[Object.keys(elem)[0]][0];
        } else {
            let arr = String(elem).split('');
            let arr2 = arr.filter((el) => {return ((el.charCodeAt(0) >= 65)&&(el.charCodeAt(0) <= 122))})
            return acc+String(arr2)[0];
        }
    }, '')
    return(g.toUpperCase().split('').sort().join(''));
};
