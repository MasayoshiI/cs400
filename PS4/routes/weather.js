var express = require('express');
var router = express.Router();
var request = require('request');


/* GET users listing. */
// router.get('/', function(req, res, next) {
// //   res.send('respond with a weather');
//     request({
//         uri: 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=' + 'bbd0a8589bd21bb07d8b67724fe48dad'
//       }).pipe(res);
      
// });
router.get('/', function(req, res, next) {
    request.get('http://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=' + 'bbd0a8589bd21bb07d8b67724fe48dad', { json: true }, (err, response, body) => {
    if (err) { return console.log(err); }
    console.log(response.body)
    data = response.body
    res.render('weather', {title: "Tokyo Weather",temp: data.main.temp, wind:JSON.stringify(data.wind), clouds:JSON.stringify(data.clouds),humidity:data.main.humidity});
    
    }
    
    );
    

    
});
module.exports = router;