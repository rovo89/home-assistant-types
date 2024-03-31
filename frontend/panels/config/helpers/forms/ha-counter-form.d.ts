import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../../components/ha-icon-picker";
import "../../../../components/ha-switch";
import "../../../../components/ha-textfield";
import { Counter } from "../../../../data/counter";
import { HomeAssistant } from "../../../../types";
declare class HaCounterForm extends LitElement {
    hass: HomeAssistant;
    new: boolean;
    private _item?;
    private _name;
    private _icon;
    private _maximum?;
    private _minimum?;
    private _restore?;
    private _initial?;
    private _step?;
    set item(item: Counter);
    focus(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-counter-form": HaCounterForm;
    }
}
export {};
