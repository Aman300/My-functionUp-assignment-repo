const express = require('express');

// const _ = require('lodash');

const  logger = require('../logger/logger')  // Edite done

const  util = require('../util/helper') // Edite done

const  validator = require('../validator/formatter') // Edite done

const router = express.Router();

router.get('/test-me', function (req, res) {

    logger.welcome();                            // Edite done
                                                // Edite done
    util.printDate();
    util.printMonth();                          // Edite done
    util.getBatchInfo();
    
    validator.trim();
    validator.changetoLowerCase();
    validator.changeToUpperCase();                  // Edite done
    
    res.send('My first ever api!')
});

// router.get('/hello', function (req, res) {

//     let yearOfMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//     let result = _.chunk(['January', 'February', 'March', 'April'], 4);

//     console.log(result);

//     ////////////////////////////////////////////////

//     let number = [1,3,5,7,11,13,17,19,23,27];
    
//     console.log(number);
    
//     res.send('My first ever api!')
// });

module.exports = router;
// adding this comment for no reason