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
            throw TypeError;

        function bindMe() {
            return eval(func.toString());
        }

        return bindMe.bind(context)();
    }
})()