

let trim = function(){
    let text = ' functionUp  ';
    let result = text.trim();
    console.log(result);
}

let changetoLowerCase = function(){
    let text = 'functionUp';
    let result = text.toLowerCase();
    console.log(result);
}

let changeToUpperCase = function(){
    let text = 'functionUp';
    let result = text.toUpperCase();
    console.log(result);
}

module.exports.trim = trim;
module.exports.changetoLowerCase = changetoLowerCase;
module.exports.changeToUpperCase = changeToUpperCase;