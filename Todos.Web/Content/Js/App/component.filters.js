"use stricts";

var mediator = require("mediator");

var ViewModel = function() {
    this.showAll = function() {
        mediator.publish("fetch-todos",  "ALL");
    };

    this.showActive = function() {
        mediator.publish("fetch-todos",  "ACTIVE");
    };

    this.showCompleted = function() {
        mediator.publish("fetch-todos",  "COMPLETED");
    };
};

module.exports = {
    viewModel: ViewModel,
    template: {
        element: "filters-component"
    }
};