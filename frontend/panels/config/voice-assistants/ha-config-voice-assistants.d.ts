import { PropertyValues } from "lit";
import { CloudStatus } from "../../../data/cloud";
import { HassRouterPage, RouterOptions } from "../../../layouts/hass-router-page";
import { HomeAssistant } from "../../../types";
export declare const voiceAssistantTabs: {
    path: string;
    translationKey: string;
    iconPath: string;
}[];
declare class HaConfigVoiceAssistants extends HassRouterPage {
    hass: HomeAssistant;
    cloudStatus: CloudStatus;
    narrow: boolean;
    isWide: boolean;
    _entities: HomeAssistant["entities"];
    private _exposedEntities?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected routerOptions: RouterOptions;
    protected updatePageEl(pageEl: any): void;
    willUpdate(changedProperties: PropertyValues): void;
    private _fetchExposedEntities;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-voice-assistants": HaConfigVoiceAssistants;
    }
    interface HASSDomEvents {
        "exposed-entities-changed": undefined;
    }
}
export {};
