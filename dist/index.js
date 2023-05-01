"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_connected = exports.get = void 0;
function get(url, initDic) {
    if (typeof window === "undefined") { // running under node js
        var modulename = "eventsource";
        var EventSourceNode = require(modulename);
        return new EventSourceNode(url, initDic);
    }
    else { // inside a browser
        return new EventSource(url, initDic);
    }
}
exports.get = get;
function get_connected(url, initDic) {
    return new Promise(function (resovle, reject) {
        var es = get(url, initDic);
        es.onopen = function (ev) {
            resovle(es);
        };
        es.onerror = function (ev) {
            reject(ev);
        };
    });
}
exports.get_connected = get_connected;
//# sourceMappingURL=index.js.map