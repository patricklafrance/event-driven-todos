"use strict";

var _ = require("underscore");
var mediator = require("mediator");
var registerHandler = require("registerHandler");
var ajax = require("ajax");

var CompleteTodoHandler = function() {
    this.handle = function(command) {
        var promise = ajax.post({ url: "/Todos/Complete", data: { id: command.Id } });

        promise.done(function() {
            mediator.publish("todo-completed", command.Id);
        });
    };
};

registerHandler("complete-todo", new CompleteTodoHandler());