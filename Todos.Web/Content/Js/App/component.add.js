"use strict";

var ko = require("knockout");
var mediator = require("mediator");

var ViewModel = function() {
    this.description = ko.observable();

    this.add = function() {
        mediator.publish("add-todo", { Description: this.description.peek() });
    };
};

module.exports = {
    viewModel: ViewModel,
    template: {
        element: "add-component"
    }
};