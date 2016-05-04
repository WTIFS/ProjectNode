/**
 * Created by Yuanfei on 2016/4/6.
 */
var obj = {
    asdf: 1,
    sdfg: 2,
    dfgh: 3
};

//Not working
/*
obj.forEach(function(key){
    console.log(`key: ${key}, val: ${obj.key}`);
});*/

console.log(obj.size);
console.log(obj.length);
console.log({}.size);

console.log({}=={});
console.log(JSON.stringify({})==JSON.stringify({}));
