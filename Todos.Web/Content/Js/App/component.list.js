"use strict";

var ko = require("knockout");
var mediator = require("mediator");

var ViewModel = function() {
    var that = this;

    this.todos = ko.observableArray();

    mediator.subscribe("todos-fetched", function(todos) {
        that.todos(todos);
    });

    mediator.subscribe("todo-added", function(todo) {
        that.todos.push(todo);
    });

    mediator.subscribe("todo-deleted", function(todoId) {
        that.todos.remove(function(item) {
            return item.Id === todoId;
        });
    });

    mediator.publish("fetch-todos");
};

module.exports = {
    viewModel: ViewModel,
    template: {
        element: "list-component"
    }
};