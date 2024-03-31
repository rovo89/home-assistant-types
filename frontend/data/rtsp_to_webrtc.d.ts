import { HomeAssistant } from "../types";
export interface WebRtcSettings {
    stun_server?: string;
}
export declare const fetchWebRtcSettings: (hass: HomeAssistant) => Promise<WebRtcSettings>;
