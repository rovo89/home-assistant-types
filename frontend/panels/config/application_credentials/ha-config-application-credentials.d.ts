import { CSSResultGroup, LitElement, PropertyValues } from "lit";
import "../../../components/ha-fab";
import "../../../components/ha-help-tooltip";
import "../../../components/ha-svg-icon";
import { ApplicationCredential } from "../../../data/application_credential";
import "../../../layouts/hass-tabs-subpage-data-table";
import { HomeAssistant, Route } from "../../../types";
export declare class HaConfigApplicationCredentials extends LitElement {
    hass: HomeAssistant;
    _applicationCredentials: ApplicationCredential[];
    isWide: boolean;
    narrow: boolean;
    route: Route;
    private _selected;
    private _dataTable;
    private _columns;
    protected firstUpdated(changedProperties: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _handleSelectionChanged;
    private _removeSelected;
    private _loadTranslations;
    private _fetchApplicationCredentials;
    private _addApplicationCredential;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-application-credentials": HaConfigApplicationCredentials;
    }
}
