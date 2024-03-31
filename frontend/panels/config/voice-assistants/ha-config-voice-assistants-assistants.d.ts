import { LitElement } from "lit";
import { CloudStatus } from "../../../data/cloud";
import { ExposeEntitySettings } from "../../../data/expose";
import "../../../layouts/hass-loading-screen";
import "../../../layouts/hass-tabs-subpage";
import { HomeAssistant, Route } from "../../../types";
import "./assist-pref";
import "./cloud-alexa-pref";
import "./cloud-discover";
import "./cloud-google-pref";
export declare class HaConfigVoiceAssistantsAssistants extends LitElement {
    hass: HomeAssistant;
    cloudStatus?: CloudStatus;
    exposedEntities?: Record<string, ExposeEntitySettings>;
    isWide: boolean;
    narrow: boolean;
    route: Route;
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-voice-assistants-assistants": HaConfigVoiceAssistantsAssistants;
    }
}
