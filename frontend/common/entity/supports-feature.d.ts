import { HassEntity } from "home-assistant-js-websocket";
export declare const supportsFeature: (stateObj: HassEntity, feature: number) => boolean;
export declare const supportsFeatureFromAttributes: (attributes: {
    [key: string]: any;
}, feature: number) => boolean;
