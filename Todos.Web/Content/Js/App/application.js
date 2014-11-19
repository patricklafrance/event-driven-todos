"use strict";

var ko = require("knockout");

ko.components.register("list-todos", require("./component.list.js"));
ko.components.register("todo-list-item", require("./component.list-item.js"));
ko.components.register("add-todo", require("./component.add.js"));
ko.components.register("todos-counter", require("./component.counter.js"));
ko.components.register("todos-filters", require("./component.filters.js"));

require("./handler.fetch-todos.js");
require("./handler.add-todo.js");
require("./handler.delete-todo.js");
require("./handler.complete-todo.js");

ko.applyBindings({});