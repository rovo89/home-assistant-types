import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../../components/ha-form/ha-form";
import "../../../../components/ha-formfield";
import "../../../../components/ha-icon-picker";
import "../../../../components/ha-radio";
import "../../../../components/ha-textfield";
import { InputText } from "../../../../data/input_text";
import { HomeAssistant } from "../../../../types";
declare class HaInputTextForm extends LitElement {
    hass: HomeAssistant;
    new: boolean;
    private _item?;
    private _name;
    private _icon;
    private _max?;
    private _min?;
    private _mode?;
    private _pattern?;
    set item(item: InputText);
    focus(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _modeChanged;
    private _valueChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-input_text-form": HaInputTextForm;
    }
}
export {};
