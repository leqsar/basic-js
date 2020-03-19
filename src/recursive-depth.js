module.exports = class DepthCalculator {
    calculateDepth(arr) {
    let depth = 0;
    arr.forEach(item => {
        if (Array.isArray(item)) {
            let internalDepth = this.calculateDepth(item);
            if (depth < internalDepth) {
                depth = internalDepth;
            }
        }
    });
    return depth+1;
    }
};
