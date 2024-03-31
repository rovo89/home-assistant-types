import type { HassEntity } from "home-assistant-js-websocket";
export interface CustomCardEntry {
    type: string;
    name?: string;
    description?: string;
    preview?: boolean;
    documentationURL?: string;
}
export interface CustomCardFeatureEntry {
    type: string;
    name?: string;
    supported?: (stateObj: HassEntity) => boolean;
    configurable?: boolean;
}
export interface CustomCardsWindow {
    customCards?: CustomCardEntry[];
    customCardFeatures?: CustomCardFeatureEntry[];
    /**
     * @deprecated Use customCardFeatures
     */
    customTileFeatures?: CustomCardFeatureEntry[];
}
export declare const CUSTOM_TYPE_PREFIX = "custom:";
export declare const customCards: CustomCardEntry[];
export declare const getCustomCardFeatures: () => CustomCardFeatureEntry[];
export declare const getCustomCardEntry: (type: string) => CustomCardEntry;
export declare const isCustomType: (type: string) => boolean;
export declare const stripCustomPrefix: (type: string) => string;
