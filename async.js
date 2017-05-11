var async = require('async');
var util = require('util');

function callback(err, results) {
    console.log(err);
    console.log(JSON.stringify(results));
}


//串行 无关联 async.series
//函数依次执行，后面不需要调前面步骤的结果

/*async.series(
    { 
        func1: function(done){
            //done(err, 参数): 将参数写入results.func1
            //TODO: 处理数据
            done(err, 处理结果) //results.func1 = 处理结果
            done(err, 处理结果1, 处理结果2) //表现为数组，results.func1 = [处理结果1, 处理结果2]
        }, 
        func2: function(done){ 
            //TODO: 处理数据
            done(err, 处理结果)
        }, 
    },
    function(error, results){ 
        //results.func1 = 处理结果1, results.func2 = 处理结果2...
    }
);

async.auto(
    {
        func1: function(done){
            //TODO: 处理数据
            done(err, 要写入func1的结果)
        }, 
        func2: ["func1", function(done, results){ //依赖func1
            //results = {func1: xxx};
            //TODO: 处理数据
            done(err, 返回结果)
        }],
        func3: ["func1", function(done, results){
            //TODO: 处理数据
        }]
    }, function(error, results){ 
        results = {func1: xxx, func2: xxx, func3: xxx};
    }
);*/

// async.auto({  
//     func1: function (done) {  
//         done(null, 1, 5);  
//     },  
  
//     func2: function (done, results) {  
//         done(null, 2);  
//     },  
//     func3: function (done, results) {  
//         done(null, 3);  
//     },  
//     func4: ["func1", "func3", function (done, results) {  
//         done(null, 4);  
//     }]  
// }, function(err, results){
//     if (!err)
//         console.log(JSON.stringify(results));
//     else console.log(err);
// });  

var async = require("async");
async.series({
    func1: function(done){
        done("asdf", "ha", "q");
    },
    func2: function(done){
        done(null, 2);
    }
}, function(err, results){
    if (!err) console.log(JSON.stringify(results));
    else console.log(err);
});

/*var ffor = function(){
    for (var i=0; i<10; i++)
        console.log(i);
}

ffor();*/

/*
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
});*/

// var errFlag = false;
// async.series({
//     a: function(done) {
//         for (var i=0; i<5 && !errFlag; i++) {
//             errFlag = true;
//             done(Error(i));
//         }
//     }
// }, callback);
