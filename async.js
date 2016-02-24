var async = require('async');
var util = require('util');
/*async.auto({  
    func1: function (done) {  
        done(null, 1, 5);  
    },  
  
    func2: function (done, results) {  
        done(null, 2);  
    },  
    func3: function (done, results) {  
        done(null, 3);  
    },  
    func4: ["func1", "func3", function (done, results) {  
        done(null, 4);  
    }]  
}, function(err, results){
    if (!err)
        console.log(JSON.stringify(results));
    else console.log(err);
}); */ 

/*async.series({
    func1: function(done){
        done(null, "ha", "q");
    },
    func2: function(done, results){
        console.log(JSON.stringify(results));
        done(null, 2);
    }
}, function(err, results){
    /*if (!err) console.log(JSON.stringify(results));
    else console.log(err);
})*/

/*var ffor = function(){
    for (var i=0; i<10; i++)
        console.log(i);
}

ffor();*/

var arr = [1,2,3,4];
async.forEach(arr, function(item, done2){
    console.log(item);
    item+=1;
    if (item==2||item==4) {done2(Error("ooo"));}//其他会继续执行
    else done2();
}, function(err){
    if (err) console.log(err);
    //else console.log("done");
    console.log(arr);
});