"use strict";

var $ = require("jquery");
var _ = require("underscore");
var Q = require("q");
var utils = require("Core/utils");

var ajax = {
    get: function(options) {
        var callOptions = this._getOptions(options);
        callOptions.type = "GET";

        return Q($.ajax(callOptions));
    },

    post: function(options) {
        var callOptions = this._getOptions(options);
        callOptions.type = "POST";

        return Q($.ajax(callOptions));
    },

    raw: function(options) {
        return Q($.ajax(options));
    },

    _getOptions: function(options) {
        var callOptions = _.isNull(options) ? {} : _.extend({}, options);
        callOptions.cache = _.isUndefined(callOptions.cache) ? false : callOptions.cache;
            
        return callOptions;
    }
};

module.exports = ajax;