/**
 * Created by Yuanfei on 2017/5/10.
 */

var request = require('request');
var dubbo=require('node-zookeeper-dubbo');
var java=require('js-to-java');
const app=require('express')();

const rnaApiConfig = {
    application: {name:'fxxk'},
    register: '127.0.0.1:2181',
    dubboVer: '8.3-SNAPSHOT',
    dependencies: {
        RnaApi: {interface:'com.xianzhi.apis', version: undefined, timeout: 6000, group: undefined}
    }
};

const unifiedServiceConfig = {
    application: {name: 'fxxk'},
    register: '127.0.0.1: 2181',
    dubboVer: '4.3-SNAPSHOT',
    dependencies: {
        RnaApi: {interface:'com.xianzhi.apis', version: undefined, timeout: 6000, group: undefined}
    }
};



var method="getOneUserRealName"; //方法名
var arg1={$class:'java.lang.String',$:'qianbao'}; //参数1
var arg2={$class:'java.lang.String',$:'15580555399'}; //参数2
var arg3={$class:'int',$:0}; //参数3
var args=[arg1, arg2, arg3];//参数数组

var cb = function() {
    service.RnaApi.getOneUserRealName(arg1, arg2, arg3).then(data=> {
        console.log(data);
    });
};

//const service = new dubbo(opt, cb);//连接zk

var params = {
    id: 1,
    name: 'asdf',
    is_direct: false
};
var map = java.HashMap(params);
console.log(map);

