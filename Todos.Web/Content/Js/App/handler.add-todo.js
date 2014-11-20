"use strict";

var _ = require("underscore");
var mediator = require("mediator");
var registerHandler = require("registerHandler");
var ajax = require("ajax");

var AddTodoHandler = function() {
    this.handle = function(command) {
        ajax.get({ url: "/Todos/NextId" }).done(function(nextId) {
            var data = _.extend({}, command);

            data.Id = nextId.NextId;
            data.IsCompleted = false;

            ajax.post({ url: "/Todos/Add", data: data }).done(function() {
                mediator.publish("todo-added", data);
            });
        });
    };
};

registerHandler("add-todo", new AddTodoHandler());
