import { UnsubscribeFunc } from "home-assistant-js-websocket";
import { HomeAssistant } from "../types";
export interface TimeDatePreview {
    state: string;
    attributes: Record<string, any>;
}
export declare const subscribePreviewTimeDate: (hass: HomeAssistant, flow_id: string, flow_type: "config_flow" | "options_flow", user_input: Record<string, any>, callback: (preview: TimeDatePreview) => void) => Promise<UnsubscribeFunc>;
