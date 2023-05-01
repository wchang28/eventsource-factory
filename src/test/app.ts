import {EventSourceInitDict, get, get_connected} from "../index";

get_connected("http://localhost:8080/sse")
.then((es) => {
    es.addEventListener("server-time", (ev) => {
        console.log(`receiving message. msg=${JSON.stringify(ev.data)}`);
    });
    console.log("successfully connected");
    setTimeout(() => {
        console.log("Done");
        process.exit(0);
    }, 15000);
}).catch((err) => {
    console.error(`!!! Error: ${JSON.stringify(err, null, 2)}`);
    process.exit(1);
});
