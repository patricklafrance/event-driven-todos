"use strict";

var ko = require("knockout");
var mediator = require("mediator");

var ViewModel = function(params) {
    var that = this;

    this.edit = function() {
        that.isInEdition(true);
    };

    this.save = function() {
        that.isInEdition(false);

        mediator.publish("update-todo", {
            Id: params.todo.Id,
            Description: that.description.peek(),
            IsCompleted:  that.isCompleted.peek()
        });
    };

    this.cancelEdition = function() {
        that.isInEdition(false);
    };

    this.remove = function() {
        mediator.publish("delete-todo", {
            Id: params.todo.Id
        });
    };

    this.markCompleted = function() {
        mediator.publish("complete-todo", {
            Id: params.todo.Id
        });
    };

    this.getTemplateName = function() {
        return that.isInEdition() ? "editable-todo-list-item" : "read-only-todo-list-item";
    };

    this.description = ko.observable(params.todo.Description);
    this.isCompleted = ko.observable(params.todo.IsCompleted);
    this.isInEdition = ko.observable(false);

    mediator.subscribe("todo-completed", function(todoId) {
        if (params.todo.Id === todoId) {
            that.isCompleted(true);
        }
    });
};

module.exports = {
    viewModel: ViewModel,
    template: {
        element: "list-item-component"
    }
};

