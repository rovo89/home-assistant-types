import { CSSResultGroup, LitElement, nothing, PropertyValues } from "lit";
import { ExtEntityRegistryEntry } from "../../../../../data/entity_registry";
import type { HomeAssistant } from "../../../../../types";
import "../../../helpers/forms/ha-counter-form";
import "../../../helpers/forms/ha-input_boolean-form";
import "../../../helpers/forms/ha-input_button-form";
import "../../../helpers/forms/ha-input_datetime-form";
import "../../../helpers/forms/ha-input_number-form";
import "../../../helpers/forms/ha-input_select-form";
import "../../../helpers/forms/ha-input_text-form";
import "../../../helpers/forms/ha-schedule-form";
import "../../../helpers/forms/ha-timer-form";
import "../../../voice-assistants/entity-voice-settings";
import "../../entity-registry-settings-editor";
export declare class EntitySettingsHelperTab extends LitElement {
    hass: HomeAssistant;
    entry: ExtEntityRegistryEntry;
    private _error?;
    private _item?;
    private _submitting?;
    private _componentLoaded?;
    private _registryEditor?;
    protected firstUpdated(changedProperties: PropertyValues): void;
    protected updated(changedProperties: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _entityRegistryChanged;
    private _valueChanged;
    private _getItem;
    private _updateItem;
    private _confirmDeleteItem;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "entity-settings-helper-tab": EntitySettingsHelperTab;
    }
}
