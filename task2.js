/**
 * @param {String} string 
 * @example randomizeString ('apple pen') => 'eppa plen'
 * @return {String} - random sorted string
 */
function randomizeString(string) {
    if (typeof string !== 'string') {
        return 'Error: argument not a string'        
    }
    let stringClone = string.split('');
        return stringClone.sort(function () {
            return Math.random() - 0.5
        }).join('')    
}

/**
 * @param {String} string  * 
 * @example replaceSpaces('apple pen') => 'apple_pen'
 * @return {String} - string with replaced spaces on '_'
 */
function replaceSpaces(string) {
    if (typeof string !== 'string') {
        return 'Error: argument not a string'        
    }
    return string.replace(/\s/, '_')    
}

/**
 * @param {String} string 
 * @example camesCaseString('apple pen') => 'appLe pEn' 
 * @return {String} - modified string
 */
function camelCaseString(string) {
    if (typeof string !== 'string') {
        return 'Error: argument not a string'        
    }
    let camelCaseString = string.split('')
        camelCaseString = camelCaseString.map(function (it, index) {
            if (index % 2 === 1) {
                it = it.toUpperCase()
                return it
            }
            return it
        })
        return camelCaseString.join('')    
}

/**
 * @param {String} string 
 * @return {String} - string which will modified through 3 functions
 */
let mappingString = function (string) {        
    var i = 0
    function mapping(string, cbArray) {
        let mappedString = string
        for (i; i < cbArray.length; i++) {
            mappedString = cbArray[i](mappedString)
        }
        return mappedString
    }
    if (typeof string === 'string') {
        return 'Error: argument not a string'            
    }
    return mapping(string, [camelCaseString, replaceSpaces, randomizeString])
    
}
/**
 * @param {Number} width 
 * @param {Number} height 
 */
function draw(width, height) {
    let line;
    let i
    let j
    for (i = 1; i <= height; i++) {
        line = '';
        for (j = 1; j <= width; j++) {
            if (i === 1 || i === height){
                line += '* '            
                continue
            }                            
            if (1 < i && i <= height) {
                if (1 < j && j < width) {
                    line += '_ '           
                    continue
                }                    
                line += '* '
                continue
            }                
            line += '_ '                
        }
        console.log(line)
    }
}

module.exports = {
    mappingString,
    draw
}