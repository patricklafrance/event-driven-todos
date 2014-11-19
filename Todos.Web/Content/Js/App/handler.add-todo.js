"use strict";

var _ = require("underscore");
var mediator = require("mediator");
var ajax = require("ajax");

mediator.subscribe("add-todo", function(command) {
    ajax.get({ url: "/Todos/NextId" }).done(function(nextId) {
        var data = _.extend({}, command);

        data.Id = nextId.NextId;
        data.IsCompleted = false;

        ajax.post({ url: "/Todos/Add", data: data }).done(function() {
            mediator.publish("todo-added", data);
        });
    });
});
