(function () {
    var toUpperCase = function (string) {
        console.log(string.toUpperCase())
    };
    var toCamelCase = function (string) {
        var letters = string.split('')
            letters.forEach(function (element, index) {
            if (index % 2 === 1) {
                element.toUpperCase()
            }
        });
        console.log(letters.join(''))
    }
})();