(function () {
    var OPERATION_STRING = 'Введите математическую операцию которую нужно выполнить \'div\', \'sum\', \'mult\''
    var ENTER_NUMBER = 'Введите число.'
    var WARNING_MSG = 'Делить на ноль нельзя! Введите другое число или операцию.'    
    var math = function (operation) {
        var num1 = query(ENTER_NUMBER)
        var num2 = query(ENTER_NUMBER)
        switch (operation) {
            case "sum":
                alert(parseInt(num1 + num2))
                break
            case "mult":
                alert(num1 * num2)
                break
            case "div":
                if (num2 !== '0') {
                    alert(num1 / num2)
                } else {
                    alert(WARNING_MSG)
                    math(query(OPERATION_STRING))
                }        
                break
        }        
    }
    var query = function (string) {
        return prompt(string, '')
    }
    math(query(OPERATION_STRING))
})()