var async = require('async');
var util = require('util');
async.auto({  
    func1: function (done) {  
        done(null, 1);  
    },  
  
    func2: function (done, results) {  
        done(null, 2);  
    },  
    func3: function (done, results) {  
        done(Error("asdf"), 3);  
    },  
    func4: ["func1", "func3", function (done, results) {  
        done(null, 4);  
    }]  
}, function(err, results){
    if (!err)
        console.log(JSON.stringify(results));
    else console.log(err);
});  

/*var ffor = function(){
    for (var i=0; i<10; i++)
        console.log(i);
}

ffor();*/

var arr = [1,2,3];
async.forEach(arr, function(item, done2){
    console.log(item);
    if (item==2) {done2(Error("ooo"));return;}
    else done2();
}, function(err){
    if (err) console.log(err);
    else console.log("done");
});