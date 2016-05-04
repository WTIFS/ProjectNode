/**
 * Created by Yuanfei on 2016/4/6.
 */
var obj = {
    a: 0,
    asdf: 1,
    sdfg: 2,
    dfgh: 3
};

if (obj.a) console.log('a');
//Not working. For each is not a function
/*
obj.forEach(function(key){
    console.log(`key: ${key}, val: ${obj[key]}`);
});*/

console.log(obj.size); //undefined
console.log(obj.length); //undefined
console.log({}.size); //undefined

console.log({}=={}); //false
console.log(JSON.stringify({})==JSON.stringify({})); //true




