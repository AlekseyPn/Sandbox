(function () {
    /** 
     * @param
     * // 'sum', 'div', 'mult' 
     * @example
     * //returns 2
     * math('div', 10, 5)
     */
    var WARNING_MSG = 'Делить на ноль нельзя! Введите другое число или операцию.',
        DEFAULT_MSG = 'Введенные параметры не верны, проверьте правильность введеных параметров и повторите операцию.'
    var math = function (operation, num1, num2) {

        switch (operation) {
            case 'sum':
                console.log(parseInt(num1 + num2))
                break
            case 'mult':
                console.log(num1 * num2)
                break
            case 'div':
                if (num2 !== '0') {
                    console.log(num1 / num2)
                } else {
                    console.log(WARNING_MSG)
                }
                break
            default:
                console.log(DEFAULT_MSG)
        }
    }
    
    var cloneObject = {
        simple: function (obj) {
            return obj
        },
        full: function (obj) {
            // Два способа клонирования, старый добрый for..in и ES2015 ^_^
            // var clone = {}
            // for (key in obj) {
            //     clone[key] = obj[key]
            // }
            // return clone
            return Object.assign({}, obj)
        }
    }
})()