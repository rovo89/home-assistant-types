import { CSSResultGroup, LitElement, PropertyValues, TemplateResult } from "lit";
import "../../../../components/ha-card";
import "../../../../components/ha-fab";
import "../../../../components/ha-svg-icon";
import "../../../../layouts/hass-loading-screen";
import "../../../../layouts/hass-subpage";
import "../../../../layouts/hass-tabs-subpage-data-table";
import { HomeAssistant, Route } from "../../../../types";
export declare class HaConfigLovelaceRescources extends LitElement {
    hass: HomeAssistant;
    isWide: boolean;
    narrow: boolean;
    route: Route;
    private _resources;
    private _columns;
    protected render(): TemplateResult;
    protected firstUpdated(changedProps: PropertyValues): void;
    private _getResources;
    private _editResource;
    private _addResource;
    private _openDialog;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-lovelace-resources": HaConfigLovelaceRescources;
    }
}
