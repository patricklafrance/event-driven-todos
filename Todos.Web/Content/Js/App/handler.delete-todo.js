"use strict";

var mediator = require("mediator");
var ajax = require("ajax");

mediator.subscribe("delete-todo", function(command) {
    var promise = ajax.post({ url: "/Todos/Delete", data: command });

    promise.done(function() {
        mediator.publish("todo-deleted", command.Id);
    });
});