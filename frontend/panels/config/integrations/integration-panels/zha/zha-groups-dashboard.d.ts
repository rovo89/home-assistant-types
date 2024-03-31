import "@material/mwc-button";
import { CSSResultGroup, LitElement, PropertyValues, TemplateResult } from "lit";
import "../../../../../components/ha-fab";
import "../../../../../components/ha-icon-button";
import { ZHAGroup } from "../../../../../data/zha";
import "../../../../../layouts/hass-tabs-subpage-data-table";
import { HomeAssistant, Route } from "../../../../../types";
export interface GroupRowData extends ZHAGroup {
    group?: GroupRowData;
    id?: string;
}
export declare class ZHAGroupsDashboard extends LitElement {
    hass: HomeAssistant;
    route: Route;
    narrow: boolean;
    isWide: boolean;
    private _groups;
    private _firstUpdatedCalled;
    connectedCallback(): void;
    protected firstUpdated(changedProperties: PropertyValues): void;
    private _formattedGroups;
    private _columns;
    protected render(): TemplateResult;
    private _fetchGroups;
    private _handleRowClicked;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "zha-groups-dashboard": ZHAGroupsDashboard;
    }
}
