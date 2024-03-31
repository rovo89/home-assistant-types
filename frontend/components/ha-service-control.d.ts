import { HassServiceTarget } from "home-assistant-js-websocket";
import { CSSResultGroup, LitElement, PropertyValues } from "lit";
import { HomeAssistant } from "../types";
import "./ha-checkbox";
import "./ha-icon-button";
import "./ha-selector/ha-selector";
import "./ha-service-picker";
import "./ha-settings-row";
import "./ha-yaml-editor";
export declare class HaServiceControl extends LitElement {
    hass: HomeAssistant;
    value?: {
        service: string;
        target?: HassServiceTarget;
        data?: Record<string, any>;
    };
    disabled: boolean;
    narrow: boolean;
    showAdvanced: boolean;
    hidePicker: boolean;
    hideDescription: boolean;
    private _value;
    private _checkedKeys;
    private _manifest?;
    private _yamlEditor?;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    private _getServiceInfo;
    private _filterFields;
    private _filterField;
    protected render(): import("lit-html").TemplateResult<1>;
    private _localizeValueCallback;
    private _checkboxChanged;
    private _serviceChanged;
    private _entityPicked;
    private _targetChanged;
    private _serviceDataChanged;
    private _itemMoved;
    private _dataChanged;
    private _fetchManifest;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-service-control": HaServiceControl;
    }
}
