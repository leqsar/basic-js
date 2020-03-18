module.exports = function repeater(str, options) {
    let separator,
        additionSeparator,
        additionalAddition,
        additionsArr,
        repeatTimes = options.repeatTimes,
        addition = options.addition,
        additionRepeatTimes = options.additionRepeatTimes;

    if (options.addition === undefined) addition = '';
    if (options.repeatTimes === undefined) repeatTimes = 1;
    if (options.additionRepeatTimes === undefined) additionRepeatTimes = 1;
    if (options.separator === undefined) separator = '+';
    else separator = options.separator;
    if (options.additionSeparator === undefined) additionSeparator = '|';
    else additionSeparator = options.additionSeparator;

    additionalAddition = addition+'*';
    additionsArr = additionalAddition.repeat(additionRepeatTimes).split('*');
    additionsArr.pop();
    let resultAddition = additionsArr.join(`${additionSeparator}`);
    let additionalStr = str+`${resultAddition}`+'*';
    let arr = additionalStr.repeat(repeatTimes).split('*');
    arr.pop();
    let resultStr = arr.join(`${separator}`);
    return resultStr;
};
