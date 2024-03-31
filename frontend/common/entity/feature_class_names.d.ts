import { HassEntity } from "home-assistant-js-websocket";
export type FeatureClassNames<T extends number = number> = Partial<Record<T, string>>;
export declare const featureClassNames: (stateObj: HassEntity, classNames: FeatureClassNames) => string;
