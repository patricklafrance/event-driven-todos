"use strict";

var _ = require("underscore");

var utils = {
    isNullOrEmpty: function(value) {
        return _.isNull(value) || value === "";
    }
}

module.exports = utils;