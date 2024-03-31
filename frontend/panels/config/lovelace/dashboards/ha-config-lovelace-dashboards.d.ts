import "@lrnwebcomponents/simple-tooltip/simple-tooltip";
import { LitElement, PropertyValues } from "lit";
import "../../../../components/ha-clickable-list-item";
import "../../../../components/ha-fab";
import "../../../../components/ha-icon";
import "../../../../components/ha-icon-button";
import "../../../../components/ha-svg-icon";
import "../../../../layouts/hass-loading-screen";
import "../../../../layouts/hass-tabs-subpage-data-table";
import { HomeAssistant, Route } from "../../../../types";
export declare class HaConfigLovelaceDashboards extends LitElement {
    hass: HomeAssistant;
    isWide: boolean;
    narrow: boolean;
    route: Route;
    private _dashboards;
    willUpdate(): void;
    private _columns;
    private _getItems;
    protected render(): import("lit-html").TemplateResult<1>;
    protected firstUpdated(changedProps: PropertyValues): void;
    private _getDashboards;
    private _navigate;
    private _editDashboard;
    private _addDashboard;
    private _openDetailDialog;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-lovelace-dashboards": HaConfigLovelaceDashboards;
    }
}
