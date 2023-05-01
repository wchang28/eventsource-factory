"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
(0, index_1.get_connected)("http://localhost:8080/sse")
    .then(function (es) {
    es.addEventListener("server-time", function (ev) {
        console.log("receiving message. msg=".concat(JSON.stringify(ev.data)));
    });
    console.log("successfully connected");
    setTimeout(function () {
        console.log("Done");
        process.exit(0);
    }, 15000);
}).catch(function (err) {
    console.error("!!! Error: ".concat(JSON.stringify(err, null, 2)));
    process.exit(1);
});
//# sourceMappingURL=app.js.map