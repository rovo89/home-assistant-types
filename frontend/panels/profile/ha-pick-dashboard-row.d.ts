import "@material/mwc-list/mwc-list-item";
import { LitElement, PropertyValues, TemplateResult } from "lit";
import "../../components/ha-select";
import "../../components/ha-settings-row";
import { HomeAssistant } from "../../types";
declare class HaPickDashboardRow extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    private _dashboards?;
    protected firstUpdated(changedProps: PropertyValues): void;
    protected render(): TemplateResult;
    private _getDashboards;
    private _dashboardChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-pick-dashboard-row": HaPickDashboardRow;
    }
}
export {};
