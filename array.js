var arr = [10,20,30];

//此时的数字代表索引
console.log(1 in arr);//true
console.log(10 in arr);//false

var brr = ["asdf", "2"];
console.log("2" in brr);//false

if (arr.indexOf(40)>-1) console.log("a");
else console.log("b");

brr[5] = "fff";
console.log(brr);