"use strict";

var _ = require("underscore");

var utils = {
    isNullOrEmpty: function(value) {
        return _.isNull(value) || _.isUndefined(value) || value === "";
    }
}

module.exports = utils;