module.exports = function transform(arr) {
    let index;
    if (arr.length == 0) return [];
    while(!(arr.every(checkCommands))){
        if (arr.indexOf('--double-prev') !== -1) {
            doublePrev(arr, arr.indexOf('--double-prev') -1);
        }else if (arr.indexOf('--double-next') !== -1) {
            doubleNext(arr, arr.indexOf('--double-next'));
        }else if (arr.indexOf('--discard-next') !== -1) {
            discardNext(arr, arr.indexOf('--discard-next'));
        }else if (arr.indexOf('--discard-prev') !== -1) {
            discardPrev(arr, arr.indexOf('--discard-prev') -1);
       }
    }
    return arr;

    function checkCommands(elem) {
        return ((elem !== '--double-prev')&&
                (elem !== '--double-next')&&
                (elem !== '--discard-prev')&&
                (elem !== '--discard-next')
                )
    };
    function discardNext(arr, index){
        arr.splice(index,1);
        if(index == arr.length) return arr;
        arr.splice(index, 1);
    };
    function discardPrev(arr, index){
        arr.splice(index+1,1);
        if(index < 0) return arr;
        arr.splice(index, 1);
    };
    function doubleNext(arr, index){
        arr.splice(index,1);
        if(index == arr.length) return arr;
        arr.splice(index, 0, arr[index]);
    };
    function doublePrev(arr, index){
        arr.splice(index+1,1);
        if(index < 0) return arr;
        arr.splice(index, 0, arr[index]);
    };
};
