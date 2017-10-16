const WARNING_MSG = 'Делить на ноль нельзя! Введите другое число или операцию.',
    DEFAULT_MSG = 'Введенные параметры не верны, проверьте правильность введеных параметров и повторите операцию.'
/**
 * 
 * 
 * @param {String} operation - Math operation
 * @param {Number} num1 
 * @param {Number} num2
 * @return {Number} - number after choosed math operation 
 */
function math (operation, num1, num2) {
    if (typeof operation === 'string')
        switch (operation) {
            case 'sum':
                return parseInt(num1 + num2)
                break
            case 'mult':
                return num1 * num2
                break
            case 'div':
                if (num2 === 0) {
                    return WARNING_MSG
                }
                return num1 / num2
                break
            default:
                return DEFAULT_MSG
        }
    return DEFAULT_MSG
}

/**
 * 
 * 
 * @param {Object} obj 
 * @returns {Object} - return link on main object
 */
function simpleCloneObj(obj) {
    return obj
}
/**
 * 
 * 
 * @param {Object} obj 
 * @returns {Object} - return full input object clone
 */
function fullCloneObj(obj) {
    // Два способа клонирования, старый добрый for..in и ES2015 ^_^
    // var clone = {}
    // for (key in obj) {
    //     clone[key] = obj[key]
    // }
    // return clone
    return Object.assign({}, obj)
}

module.exports = {
    math,
    simpleCloneObj,
    fullCloneObj
}