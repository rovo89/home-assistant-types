import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../../components/ha-formfield";
import "../../../../components/ha-icon-picker";
import "../../../../components/ha-radio";
import "../../../../components/ha-textfield";
import { InputDateTime } from "../../../../data/input_datetime";
import { HomeAssistant } from "../../../../types";
declare class HaInputDateTimeForm extends LitElement {
    hass: HomeAssistant;
    new: boolean;
    private _item?;
    private _name;
    private _icon;
    private _mode;
    set item(item: InputDateTime);
    focus(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _modeChanged;
    private _valueChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-input_datetime-form": HaInputDateTimeForm;
    }
}
export {};
