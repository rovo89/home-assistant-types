import "@material/mwc-button/mwc-button";
import "@material/mwc-list/mwc-list-item";
import "@material/mwc-tab";
import "@material/mwc-tab-bar";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-button-menu";
import "../../../components/ha-card";
import "../../../components/ha-circular-progress";
import "../../../components/ha-expansion-panel";
import "../../../components/ha-formfield";
import "../../../components/ha-icon-button";
import type { HomeAssistant } from "../../../types";
import "../../../components/ha-textfield";
import "../../../components/ha-radio";
export declare class HassioNetwork extends LitElement {
    hass: HomeAssistant;
    private _accessPoints?;
    private _curTabIndex;
    private _dirty;
    private _interface?;
    private _interfaces;
    private _processing;
    private _scanning;
    private _wifiConfiguration?;
    protected firstUpdated(): void;
    private _fetchNetworkInfo;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _renderTab;
    private _handleAction;
    private _selectAP;
    private _scanForAP;
    private _renderIPConfiguration;
    _toArray(data: string | string[]): string[];
    _toString(data: string | string[]): string;
    private _updateNetwork;
    private _handleTabActivated;
    private _handleRadioValueChanged;
    private _handleRadioValueChangedAp;
    private _handleInputValueChanged;
    private _handleInputValueChangedWifi;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "supervisor-network": HassioNetwork;
    }
}
