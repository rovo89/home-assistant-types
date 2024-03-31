import "@material/mwc-list/mwc-list-item";
import { CSSResultGroup, LitElement } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-button-menu";
import "../../../components/ha-card";
import "../../../components/ha-expansion-panel";
import "../../../components/ha-icon-button";
import "../../../components/ha-yaml-editor";
import { Field } from "../../../data/script";
import type { HomeAssistant } from "../../../types";
export default class HaScriptFieldRow extends LitElement {
    hass: HomeAssistant;
    key: string;
    excludeKeys: string[];
    field: Field;
    disabled: boolean;
    private _uiError?;
    private _yamlError?;
    private _yamlMode;
    private _errorKey?;
    private _schema;
    protected render(): import("lit-html").TemplateResult<1>;
    private _handleAction;
    private _onDelete;
    private _onYamlChange;
    private _maybeSetKey;
    private _valueChanged;
    expand(): void;
    private _computeLabelCallback;
    private _computeError;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-script-field-row": HaScriptFieldRow;
    }
}
