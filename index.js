(() => {
    const root = typeof self == 'object' && self ||
            typeof global == 'object' && global ||
            this

    const awb = {};

    if(typeof module == 'object' && module && module.exports) {
        module.exports = awb;
    }else {
        root.awb = awb;
    }

    awb.bindArrow = (func, context) => {
        if(typeof func !== 'function' || typeof context !== 'object' && !context)
            throw new TypeError('Wrong type of the passed params');

        function bindMe() {
            return eval(func.toString());
        }

        return bindMe.bind(context)();
    }
})()