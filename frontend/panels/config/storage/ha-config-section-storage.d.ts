import "@material/mwc-list";
import { LitElement, PropertyValues, TemplateResult, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-button-menu";
import "../../../components/ha-icon-button";
import "../../../components/ha-metric";
import "../../../components/ha-svg-icon";
import "../../../components/ha-icon-next";
import "../../../layouts/hass-subpage";
import type { HomeAssistant, Route } from "../../../types";
import "../core/ha-config-analytics";
declare class HaConfigSectionStorage extends LitElement {
    hass: HomeAssistant;
    route: Route;
    narrow: boolean;
    private _error?;
    private _hostInfo?;
    private _mountsInfo?;
    protected firstUpdated(changedProps: PropertyValues): void;
    protected render(): TemplateResult | typeof nothing;
    private _load;
    private _moveDatadisk;
    private _navigateToUpdates;
    private _reloadMount;
    private _addMount;
    private _changeMount;
    private _reloadMounts;
    private _getUsedSpace;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-section-storage": HaConfigSectionStorage;
    }
}
export {};
