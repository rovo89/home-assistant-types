import { HassEntity } from "home-assistant-js-websocket";
export declare const computeStateNameFromEntityAttributes: (entityId: string, attributes: {
    [key: string]: any;
}) => string;
export declare const computeStateName: (stateObj: HassEntity) => string;
