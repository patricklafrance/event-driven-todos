"use strict";

var mediator = require("mediator");
var ajax = require("ajax");

mediator.subscribe("fetch-todos", function() {
    var promise = ajax.get({ url: "/Todos/GetAll" });

    promise.done(function(data) {
        mediator.publish("todos-fetched", data.Todos);
    });
});