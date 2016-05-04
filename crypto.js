/**
 * Created by Yuanfei on 2016/4/5.
 */
var crypto = require('crypto');

var md5 = crypto.createHash('md5');
md5.update('asdf');
console.log(md5.digest('hex'));

var sha1 = crypto.createHash('sha1');
sha1.update('asdf');

var str = sha1.digest('hex');
console.log(str);

var hmac = crypto.createHmac('sha1', 'user_name');
hmac.update('asdf');
console.log(hmac.digest('hex'));

var cipher=crypto.createDecipher('aes-256-cbc', "password")
var enc = cipher.update("Mh5yxIyZH+fSMTkSgkLa5w==")
enc += cipher.final()
console.log(enc);

var cipher = crypto.createCipher("rc4", "user_name");
var crypted = cipher.update("asdf", 'utf8', 'hex');
crypted += cipher.final('hex');
console.log(crypted);

var decipher = crypto.createDecipher("rc4", "user_name");
var decrypted = decipher.update(crypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);