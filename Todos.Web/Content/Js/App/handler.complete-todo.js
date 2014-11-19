"use strict";

var _ = require("underscore");
var mediator = require("mediator");
var ajax = require("ajax");

mediator.subscribe("complete-todo", function(command) {
    var promise = ajax.post({ url: "/Todos/Complete", data: command });

    promise.done(function() {
        mediator.publish("todo-completed", command.Id);
    });
});