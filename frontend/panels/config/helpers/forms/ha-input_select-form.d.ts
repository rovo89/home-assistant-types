import "@material/mwc-list/mwc-list";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-icon-button";
import "../../../../components/ha-icon-picker";
import "../../../../components/ha-list-item";
import "../../../../components/ha-sortable";
import "../../../../components/ha-textfield";
import type { InputSelect } from "../../../../data/input_select";
import type { HomeAssistant } from "../../../../types";
declare class HaInputSelectForm extends LitElement {
    hass: HomeAssistant;
    new: boolean;
    private _item?;
    private _name;
    private _icon;
    private _options;
    private _optionInput?;
    private _optionMoved;
    set item(item: InputSelect);
    focus(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleKeyAdd;
    private _addOption;
    private _removeOption;
    private _valueChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-input_select-form": HaInputSelectForm;
    }
}
export {};
