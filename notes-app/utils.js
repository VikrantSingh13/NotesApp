console.log('utils.js');


const characterCount = function(str) {
    return str.split('').length;
}

const wordCount = function(str) {
    if(str == ""){
        return -1;
    }
    return str.split(" ").length;
}

module.exports = characterCount;