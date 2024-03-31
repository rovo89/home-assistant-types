import "@material/mwc-button/mwc-button";
import { CSSResultGroup, LitElement, PropertyValues, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-card";
import "../../../components/ha-formfield";
import "../../../components/ha-switch";
import "../../../components/ha-textfield";
import type { HomeAssistant } from "../../../types";
declare class ConfigUrlForm extends LitElement {
    hass: HomeAssistant;
    private _error?;
    private _working;
    private _external_url?;
    private _internal_url?;
    private _cloudStatus?;
    private _showCustomExternalUrl;
    private _showCustomInternalUrl;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected firstUpdated(changedProps: PropertyValues): void;
    private get _internalUrlValue();
    private get _externalUrlValue();
    private _toggleCloud;
    private _toggleInternalAutomatic;
    private _handleChange;
    private _save;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-url-form": ConfigUrlForm;
    }
}
export {};
