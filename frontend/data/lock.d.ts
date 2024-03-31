import { HassEntityAttributeBase, HassEntityBase } from "home-assistant-js-websocket";
import { HomeAssistant } from "../types";
export declare const FORMAT_TEXT = "text";
export declare const FORMAT_NUMBER = "number";
export declare const enum LockEntityFeature {
    OPEN = 1
}
interface LockEntityAttributes extends HassEntityAttributeBase {
    code_format?: string;
    changed_by?: string | null;
}
export interface LockEntity extends HassEntityBase {
    attributes: LockEntityAttributes;
}
type ProtectedLockService = "lock" | "unlock" | "open";
export declare const callProtectedLockService: (element: HTMLElement, hass: HomeAssistant, stateObj: LockEntity, service: ProtectedLockService) => Promise<void>;
export {};
