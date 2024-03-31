import { HassEntityAttributeBase, HassEntityBase } from "home-assistant-js-websocket";
import { HomeAssistant } from "../types";
interface SelectEntityAttributes extends HassEntityAttributeBase {
    options: string[];
}
export interface SelectEntity extends HassEntityBase {
    attributes: SelectEntityAttributes;
}
export declare const setSelectOption: (hass: HomeAssistant, entity: string, option: string) => Promise<import("../types").ServiceCallResponse>;
export {};
