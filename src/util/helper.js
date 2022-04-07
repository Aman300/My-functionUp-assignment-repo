

let printDate = function(){
    let today = new Date().toLocaleDateString()
    console.log(today)
}

let printMonth = function(){
    let today = new Date();
    let date = today.getMonth()+1;
    console.log(date);
}

let getBatchInfo = function(){
    console.log('Uranium, W3 D3, the topic for today is Nodejs module system');
}

module.exports.printDate = printDate;
module.exports.printMonth = printMonth;
module.exports.getBatchInfo = getBatchInfo;