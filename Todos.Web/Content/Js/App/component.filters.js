"use stricts";

var mediator = require("mediator");

var ViewModel = function() {
    this.showAll = function() {

    };

    this.showActive = function() {
        
    };

    this.showCompleted = function() {

    };
};

module.exports = {
    viewModel: ViewModel,
    template: {
        element: "filters-component"
    }
};