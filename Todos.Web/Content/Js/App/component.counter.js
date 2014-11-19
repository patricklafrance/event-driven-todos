"use strict";

var ko = require("knockout");
var mediator = require("mediator");

var ViewModel = function() {
    var that = this;

    this.count = ko.observable(0);

    mediator.subscribe("todos-fetched", function(todos) {
        var items = ko.utils.arrayFilter(todos, function(current) {
            return !current.IsCompleted;
        });

        that.count(items.length);
    });

    mediator.subscribe("todo-added", function() {
        that.count(that.count.peek() + 1);
    });

    mediator.subscribe("todo-deleted", function() {
        that.count(that.count.peek() - 1);
    });

    mediator.subscribe("todo-completed", function() {
        that.count(that.count.peek() - 1);
    });
};

module.exports = {
    viewModel: ViewModel,
    template: {
        element: "counter-component"
    }
};