var fs = require('fs');
var utils = require('../utils');
var server = require('../server');

var appconf = require('../conf').config;

exports.usage = 'ufo start [port]\n';



exports.run = function(params , options){
    var root = process.cwd(),
    port = 8150;
    
    
    
    port = params[0] || appconf.port || port;
    
    var app = new server.APP(port);
    
    app.start();
};

