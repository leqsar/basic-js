module.exports = function getSeason(date) {
        if (date === undefined) return 'Unable to determine the time of year!';
        if (Object.keys(date).length > 0) throw new Error('oh');
        let month = date.getMonth();
        if ((month == 11) || (month<=1)) return 'winter';
        if ((month <= 4) && (month>1)) return 'spring';
        if ((month <= 7) && (month>4)) return 'summer';
        if ((month<11) && (month>7)) return 'autumn';
};
