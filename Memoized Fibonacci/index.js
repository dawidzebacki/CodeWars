const fibonacci = (function () {
    const cache = {};

    function f(n) {
        let value;

        if (n in cache) {

            value = cache[n];

        } else {

            if (n === 0 || n === 1)
                value = n;
            else
                value = f(n - 1) + f(n - 2);

            cache[n] = value;
            
        }

        return value;
    }

    return f;
})();