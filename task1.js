(function () {
    var WARNING_MSG = 'Делить на ноль нельзя! Введите другое число или операцию.'
    var math = function (operation, num1, num2) {
        
        switch (operation) {
            case "sum":
                consoel.log(parseInt(num1 + num2))
                break
            case "mult":
                consoel.log(num1 * num2)
                break
            case "div":
                if (num2 !== '0') {
                    consoel.log(num1 / num2)
                } else {
                    consoel.log(WARNING_MSG)                    
                }
                break
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