import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../../components/ha-icon-picker";
import "../../../../components/ha-textfield";
import { InputBoolean } from "../../../../data/input_boolean";
import { HomeAssistant } from "../../../../types";
declare class HaInputBooleanForm extends LitElement {
    hass: HomeAssistant;
    new: boolean;
    private _item?;
    private _name;
    private _icon;
    set item(item: InputBoolean);
    focus(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-input_boolean-form": HaInputBooleanForm;
    }
}
export {};
