

let trim = function(){
    let text = ' functionUp  ';
    let result = text.trim();
    console.log('change into trim function :' + result);
}

let changetoLowerCase = function(){
    let text = 'functionUp';
    let result = text.toLowerCase();
    console.log('change into lowerCase function :' + result);
}

let changeToUpperCase = function(){
    let text = 'functionUp';
    let result = text.toUpperCase();
    console.log('change into upperCase function :' + result);
}

module.exports.trim = trim;
module.exports.changetoLowerCase = changetoLowerCase;
module.exports.changeToUpperCase = changeToUpperCase;