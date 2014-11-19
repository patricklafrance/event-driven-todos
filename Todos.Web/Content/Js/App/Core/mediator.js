"use strict";

var MediatorJs = require("mediator-js").Mediator;
var instance = new MediatorJs();

var mediator = {
    publish: function(topic, value) {
        instance.publish(topic, value);
    },

    subscribe: function(topic, callback) {
        instance.subscribe(topic, callback);
    },

    unsuscribe: function(topic, callback) {
        instance.remove(topic, callback);
    }
};

module.exports = mediator;