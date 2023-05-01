import * as types from "./init-dict-types";

export function get(url: string, initDic?: types.EventSourceInitDict) {
    if (typeof window === "undefined") {    // running under node js
        const modulename = "eventsource";
        const EventSourceNode = require(modulename);
        return new EventSourceNode(url, initDic) as EventSource;
    } else {    // inside a browser
        return new EventSource(url, initDic);
    }
}

export function get_connected(url: string, initDic?: types.EventSourceInitDict) {
    return new Promise<EventSource>((resovle, reject) => {
        const es = get(url, initDic);
        es.onopen = (ev) => {
            resovle(es);
        };
        es.onerror = (ev) => {
            reject(ev);
        };
    })
}

export type EventSourceInitDict = types.EventSourceInitDict;