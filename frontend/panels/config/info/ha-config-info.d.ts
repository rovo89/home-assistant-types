import "@material/mwc-list/mwc-list";
import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import "../../../components/ha-card";
import "../../../components/ha-clickable-list-item";
import "../../../components/ha-logo-svg";
import "../../../layouts/hass-subpage";
import type { HomeAssistant, Route } from "../../../types";
declare class HaConfigInfo extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    isWide: boolean;
    showAdvanced: boolean;
    route: Route;
    private _osInfo?;
    private _hassioInfo?;
    protected render(): TemplateResult;
    protected firstUpdated(changedProps: any): void;
    private _loadSupervisorInfo;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-info": HaConfigInfo;
    }
}
export {};
