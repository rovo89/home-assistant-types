import { LitElement, PropertyValues } from "lit";
import "../../../components/data-table/ha-data-table-icon";
import "../../../components/ha-fab";
import "../../../components/ha-help-tooltip";
import "../../../components/ha-svg-icon";
import "../../../layouts/hass-tabs-subpage-data-table";
import { HomeAssistant, Route } from "../../../types";
export declare class HaConfigUsers extends LitElement {
    hass: HomeAssistant;
    isWide: boolean;
    narrow: boolean;
    route: Route;
    private _users;
    private _columns;
    protected firstUpdated(changedProperties: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _fetchUsers;
    private _editUser;
    private _addUser;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-users": HaConfigUsers;
    }
}
