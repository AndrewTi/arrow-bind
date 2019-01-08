(() => {
    const root = typeof self == 'object' && self ||
            typeof global == 'object' && global ||
            this

    const lib = {};

    if(typeof module == 'object' && module && module.exports) {
        module.exports = lib;
    }else {
        root.lib;
    }

    lib.bindArrow = (func, context) => {
        if(typeof func !== 'function' || typeof context !== 'object' && !context)
            throw new TypeError('Wrong type of the params');

        function bindMe() {
            return eval(func.toString());
        }

        return bindMe.bind(context)();
    }
})()