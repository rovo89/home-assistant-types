/** Return an color representing a state. */
import { HassEntity } from "home-assistant-js-websocket";
export declare const stateColorCss: (stateObj: HassEntity, state?: string) => string;
export declare const domainStateColorProperties: (domain: string, stateObj: HassEntity, state?: string) => string[];
export declare const stateColorProperties: (stateObj: HassEntity, state?: string) => string[] | undefined;
export declare const stateColorBrightness: (stateObj: HassEntity) => string;
