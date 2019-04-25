console.log('utils.js');


const characterCount = function(str) {
    return str.split('').length;
}

const wordCount = function(str) {
    return str.split(" ").length;
}

module.exports = characterCount;