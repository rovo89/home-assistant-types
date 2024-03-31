import { LitElement, PropertyValues } from "lit";
import "../../../components/ha-fab";
import "../../../components/ha-icon-button";
import "../../../components/ha-relative-time";
import "../../../components/ha-icon-overflow-menu";
import "../../../layouts/hass-tabs-subpage-data-table";
import { HomeAssistant, Route } from "../../../types";
export declare class HaConfigLabels extends LitElement {
    hass: HomeAssistant;
    isWide: boolean;
    narrow: boolean;
    route: Route;
    private _labels;
    private _columns;
    private _data;
    protected firstUpdated(changedProperties: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _editLabel;
    private _showHelp;
    private _fetchLabels;
    private _addLabel;
    private _openDialog;
    private _createLabel;
    private _updateLabel;
    private _removeLabel;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-labels": HaConfigLabels;
    }
}
