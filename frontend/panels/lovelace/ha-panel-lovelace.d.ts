import "@material/mwc-button";
import { LitElement, PropertyValues, TemplateResult } from "lit";
import "../../layouts/hass-error-screen";
import "../../layouts/hass-loading-screen";
import { HomeAssistant, PanelInfo, Route } from "../../types";
import "./hui-root";
interface LovelacePanelConfig {
    mode: "yaml" | "storage";
}
export declare class LovelacePanel extends LitElement {
    panel?: PanelInfo<LovelacePanelConfig>;
    hass?: HomeAssistant;
    narrow: boolean;
    route?: Route;
    private _panelState;
    private _errorMsg?;
    private lovelace?;
    private _ignoreNextUpdateEvent;
    private _fetchConfigOnConnect;
    private _unsubUpdates?;
    private _loading;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected render(): TemplateResult | void;
    protected willUpdate(changedProps: PropertyValues): void;
    protected firstUpdated(changedProps: PropertyValues): void;
    private _handleConnectionStatus;
    private _regenerateConfig;
    private _subscribeUpdates;
    private _closeEditor;
    private _lovelaceChanged;
    get urlPath(): string;
    private _forceFetchConfig;
    private _fetchConfig;
    private _checkLovelaceConfig;
    private _setLovelaceConfig;
    private _updateLovelace;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-panel-lovelace": LovelacePanel;
    }
}
export {};
