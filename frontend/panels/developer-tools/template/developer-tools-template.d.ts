import "@material/mwc-button/mwc-button";
import { CSSResultGroup, LitElement } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-circular-progress";
import "../../../components/ha-code-editor";
import { HomeAssistant } from "../../../types";
declare class HaPanelDevTemplate extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    private _error?;
    private _errorLevel?;
    private _rendering;
    private _templateResult?;
    private _unsubRenderTemplate?;
    private _template;
    private _inited;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected firstUpdated(): void;
    protected render(): import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
    private _debounceRender;
    private _templateChanged;
    private _subscribeTemplate;
    private _unsubscribeTemplate;
    private _storeTemplate;
    private _restoreDemo;
    private _clear;
}
declare global {
    interface HTMLElementTagNameMap {
        "developer-tools-template": HaPanelDevTemplate;
    }
}
export {};
