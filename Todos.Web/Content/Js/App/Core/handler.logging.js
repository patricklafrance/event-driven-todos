"use strict";

var _ = require("underscore");

var LoggingHandler = function(next) {
    var that = this;

    this._next = next;

    this.handle = function(command) {
        console.log("Executing command: " + JSON.stringify(command));

        if (!_.isUndefined(that._next)) {
            that._next.handle(command);
        }
    };
};

module.exports = LoggingHandler;