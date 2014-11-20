"use strict";

var mediator = require("mediator");

var LoggingHandler = require("./handler.logging.js");

var registerHandler = function(channel, handler) {
    var decoratedHandler = new LoggingHandler(handler);

    mediator.subscribe(channel, function(command) {
        decoratedHandler.handle(command);
    });
};

module.exports = registerHandler