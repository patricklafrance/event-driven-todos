"use strict";

var mediator = require("mediator");
var registerHandler = require("registerHandler");
var ajax = require("ajax");
var utils = require("utils");

var FetchTodosHandler = function() {
    this.handle = function(filter) {
        if (utils.isNullOrEmpty(filter)) {
            filter = "ALL";
        }

        var promise = ajax.get({ url: "/Todos/GetAll", data: { filter: filter } });

        promise.done(function(data) {
            mediator.publish("todos-fetched", data.Todos);
        });
    };
};

registerHandler("fetch-todos", new FetchTodosHandler());