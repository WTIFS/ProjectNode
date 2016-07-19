/**
 * Created by Yuanfei on 2016/4/6.
 */
var obj = {
    a: 0,
    asdf: 1,
    sdfg: 2,
    dfgh: 3,
    b: {
        asdf: 1,
        bbbb: 2
    },
    d: function() {
        return this.asdf
    }
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

var b = obj.b;
b.bbbb =3;
c = b.bbbb;
c=4;
console.log(obj.b.bbbb); //3

console.log(obj.d);


