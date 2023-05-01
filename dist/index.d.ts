import * as types from "./init-dict-types";
export declare function get(url: string, initDic?: types.EventSourceInitDict): EventSource;
export declare function get_connected(url: string, initDic?: types.EventSourceInitDict): Promise<EventSource>;
export type EventSourceInitDict = types.EventSourceInitDict;
