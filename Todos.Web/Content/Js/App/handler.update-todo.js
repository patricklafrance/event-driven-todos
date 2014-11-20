"use strict";

var mediator = require("mediator");
var registerHandler = require("registerHandler");
var ajax = require("ajax");

var UpdateTodoHandler = function() {
    this.handle = function(command) {
        var promise = ajax.post({ url: "/Todos/Update", data: command });

        promise.done(function() {
            mediator.publish("todo-updated", command);
        });
    };
};

registerHandler("update-todo", new UpdateTodoHandler());