/**
 * 
 * 
 * @param {String} string 
 * @returns {String} - random sorted string
 */
function randomizeString (string) {
    let stringClone = string.split('');
    return stringClone.sort(function () {
        return Math.random() - 0.5
    }).join('')
}

/**
 * 
 * 
 * @param {String} string 
 * @returns {String}
 * @example replaceSpaces('apple pen')
 * return apple_pen
 */
function replaceSpaces (string) {
    return string.replace(/\s/, /_/)    
}

/**
 * 
 * 
 * @param {String} string 
 * @returns {String}
 * @example camesCaseString('apple pen')
 * return aPpLe pEn
 */
function camelCaseString (string) {
    let camelCaseString = string.split('') 
    camelCaseString.forEach(function (it, index) {
        if (index % 2 === 1) {
            it = it.toUpperCase()
        }
        return it
    })
    return camelCaseString
}

module.exports = {
    camelCaseString,
    replaceSpaces,
    randomizeString
}