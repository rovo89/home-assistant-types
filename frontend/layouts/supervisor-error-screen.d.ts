import "@material/mwc-button";
import { CSSResultGroup, LitElement, PropertyValues, TemplateResult } from "lit";
import "../components/ha-card";
import { HomeAssistant } from "../types";
import "./hass-subpage";
declare class SupervisorErrorScreen extends LitElement {
    hass: HomeAssistant;
    protected firstUpdated(changedProps: PropertyValues): void;
    protected updated(changedProps: PropertyValues): void;
    protected render(): TemplateResult;
    private _applyTheme;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "supervisor-error-screen": SupervisorErrorScreen;
    }
}
export {};
