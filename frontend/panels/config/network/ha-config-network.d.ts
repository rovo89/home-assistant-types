import "@material/mwc-button/mwc-button";
import { CSSResultGroup, LitElement, PropertyValues, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-card";
import "../../../components/ha-checkbox";
import "../../../components/ha-network";
import "../../../components/ha-settings-row";
import type { HomeAssistant } from "../../../types";
declare class ConfigNetwork extends LitElement {
    hass: HomeAssistant;
    private _networkConfig?;
    private _error?;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected firstUpdated(changedProps: PropertyValues): void;
    private _load;
    private _save;
    private _configChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-network": ConfigNetwork;
    }
}
export {};
