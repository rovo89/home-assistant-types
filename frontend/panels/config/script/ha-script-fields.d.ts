import "@material/mwc-button";
import { CSSResultGroup, LitElement, PropertyValues } from "lit";
import "../../../components/ha-button";
import "../../../components/ha-button-menu";
import "../../../components/ha-svg-icon";
import { Fields } from "../../../data/script";
import { HomeAssistant } from "../../../types";
import "./ha-script-field-row";
export default class HaScriptFields extends LitElement {
    hass: HomeAssistant;
    disabled: boolean;
    fields: Fields;
    private _focusLastActionOnChange;
    protected render(): import("lit-html").TemplateResult<1>;
    protected updated(changedProps: PropertyValues): void;
    focusLastField(): void;
    private _addField;
    private _fieldChanged;
    private _getUniqueKey;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-script-fields": HaScriptFields;
    }
}
