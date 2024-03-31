import { CSSResultGroup, LitElement } from "lit";
import "../../../components/entity/ha-entity-picker";
import "../../../components/ha-card";
import "../../../components/ha-alert";
import "../../../components/ha-expansion-panel";
import "../../../components/ha-icon-button";
import "../../../components/ha-service-control";
import "../../../components/ha-service-picker";
import "../../../components/ha-yaml-editor";
import { HomeAssistant } from "../../../types";
declare class HaPanelDevService extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    private _uiAvailable;
    private _response?;
    private _error?;
    private _yamlValid;
    private _serviceData?;
    private _yamlMode;
    private _yamlEditor?;
    protected firstUpdated(params: any): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _filterSelectorFields;
    private _validateServiceData;
    private _fields;
    private _callService;
    private _toggleYaml;
    private _yamlChanged;
    private _checkUiSupported;
    private _serviceDataChanged;
    private _serviceChanged;
    private _fillExampleData;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "developer-tools-service": HaPanelDevService;
    }
}
export {};
