var s = "0123456789万";

console.log(`asdfasdfsdf${s}`);

console.log(s.split(',').length);

var endIndex = s.indexOf("万");
console.log(s.slice(0,endIndex));

console.log(" ;\n".length);

s = "asdf g;\n";
console.log(s.substring(0, s.length-2));