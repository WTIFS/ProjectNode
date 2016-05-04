/**
 * Created by Yuanfei on 2016/4/5.
 */
var jws = require('jws');
var base64url = require('base64url');

var signature = jws.sign({
    header: {alg: 'HS256'},
    payload: JSON.stringify({1: 'hey', 2: 'you'}),
    secret: 'has a van'
});

console.log('signature: ' + signature);

console.log(base64url(JSON.stringify({alg: 'HS256'})));
console.log(base64url(JSON.stringify({1: 'hey', 2: 'you'})));


var verifyFlag = jws.verify(signature, 'HS256', 'has a van');
console.log(verifyFlag);

verifyFlag = jws.verify(signature, 'HS256', 'has a van2');
console.log(verifyFlag);

console.log(jws.decode(signature));
