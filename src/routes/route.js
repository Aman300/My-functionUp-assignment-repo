const express = require('express');

const  loggerModules = require('../logger/logger')  // Edite done

const  utilModules = require('../util/helper') // Edite done

const  validatorModules = require('../validator/formatter') // Edite done

const lodashModules = require('lodash');

const router = express.Router();

router.get('/test-me', function (req, res) {

    loggerModules.welcome();                            // Edite done

    utilModules.printDate();
    utilModules.printMonth();                          // Edite done
    utilModules.getBatchInfo();
    
    validatorModules.trim();
    validatorModules.changetoLowerCase();
    validatorModules.changeToUpperCase();                  // Edite done
    
    res.send('My first ever api!')
});

//Using the package ‘lodash’ solve below problems(Write all this in route.js in /hello route handler)

router.get('/hello', function (req, res) {

    //- Create an array of strings containing the names all the months of a year and split the array into 4 equally sized sub-arrays using the chunk function. Print these sub-arrays


    let yearOfMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let result = lodashModules.chunk( yearOfMonth,4);

    console.log('Split the array in to 4 equally using chunk function : ' + result);

    ////////////////////////////////////////////////

    //- Create an array containing the first 10 odd numbers. Using the tail function, return the last 9 elements of it and print them on console.

    let number = [1,3,5,7,11,13,17,19,23,27];
    
    console.log('last 9 odd numebr find uding tail function : ' + lodashModules.tail(number));

     /////////////////////////////////////////////////////////////////

     //- Create 5 arrays of numbers containing a few duplicate values. Using the function union create a merged array with only unique values and print them

     let a = [1,2,100,4,5]
     let b = [50,2,3,4,5]
     let c = [1,2,2,2,5]
     let d = [1,2,17,4,10]
     let f = [1,1,1,4,5]

     console.log('Remove duplicate element in array using union function : ' + lodashModules.union(a,b,c,d,f));

     /////////////////////////////////////////////////////////////////

    //- Use the function fromPairs to create an object containing key value pairs. For example [“horror”,”The Shining"],[“drama”,”Titanic"],[“thriller”,”Shutter Island"],[“fantasy”,”Pans Labyrinth"]

    let keypairs = [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]];

    console.log(lodashModules.fromPairs(keypairs));

    /////////////////////////////////////////////////////////////////
    
    res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reason