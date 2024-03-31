import { HassEntityAttributeBase, HassEntityBase, UnsubscribeFunc } from "home-assistant-js-websocket";
import { HomeAssistant } from "../types";
interface GroupEntityAttributes extends HassEntityAttributeBase {
    entity_id: string[];
    order: number;
    auto?: boolean;
    view?: boolean;
    control?: "hidden";
}
export interface GroupEntity extends HassEntityBase {
    attributes: GroupEntityAttributes;
}
export interface GroupPreview {
    state: string;
    attributes: Record<string, any>;
}
export declare const computeGroupDomain: (stateObj: GroupEntity) => string | undefined;
export declare const subscribePreviewGroup: (hass: HomeAssistant, flow_id: string, flow_type: "config_flow" | "options_flow", user_input: Record<string, any>, callback: (preview: GroupPreview) => void) => Promise<UnsubscribeFunc>;
export {};
