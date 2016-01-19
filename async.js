var async = require('async');
var util = require('util');
async.auto({  
    func1: function (callback) {  
        callback(null, "1");  
    },  
  
    func2: function (callback, results) {  
        console.log("Print#2:\n" + results);  
        callback(null, { "puncha": "during" });  
    },  
    func3: function (callback, results) {  
        console.log("Print#3:\n" + util.inspect(results));  
        callback(null, 3);  
    },  
    func4: ["func1", "func3", function (callback, results) {  
        console.log("Print#4:\n" + util.inspect(results));  
        callback(null);  
    }]  
}, function(err,data){
    console.log(data.func1);
});  

var ffor = function(){
    for (var i=0; i<10; i++)
        console.log(i);
}

ffor();