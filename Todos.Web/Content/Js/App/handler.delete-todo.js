"use strict";

var mediator = require("mediator");
var registerHandler = require("registerHandler");
var ajax = require("ajax");

var DeleteTodoHandler = function() {
    this.handle = function(command) {
        var promise = ajax.post({ url: "/Todos/Delete", data: { id: command.Id } });

        promise.done(function() {
            mediator.publish("todo-deleted", command.Id);
        });
    };
};

registerHandler("delete-todo", new DeleteTodoHandler());