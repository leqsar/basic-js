const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    let k = parseFloat(sampleActivity);
    if(sampleActivity === undefined || typeof sampleActivity !== 'string' || isNaN(k) == true) return false;
    else if(parseFloat(sampleActivity) > 15 || parseFloat(sampleActivity) <= 0) return false;
    else {
        return Math.ceil((Math.log(MODERN_ACTIVITY/(parseFloat(sampleActivity))))/(0.693/HALF_LIFE_PERIOD));
    }
};
