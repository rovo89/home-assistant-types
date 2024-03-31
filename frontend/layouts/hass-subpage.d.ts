import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import "../components/ha-icon-button-arrow-prev";
import "../components/ha-menu-button";
import { HomeAssistant } from "../types";
declare class HassSubpage extends LitElement {
    hass: HomeAssistant;
    header?: string;
    mainPage: boolean;
    backPath?: string;
    backCallback?: () => void;
    narrow: boolean;
    supervisor: boolean;
    private _savedScrollPos?;
    protected render(): TemplateResult;
    private _saveScrollPos;
    private _backTapped;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hass-subpage": HassSubpage;
    }
}
export {};
