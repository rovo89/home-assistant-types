import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../../components/ha-checkbox";
import "../../../../components/ha-formfield";
import "../../../../components/ha-icon-picker";
import "../../../../components/ha-textfield";
import { Timer } from "../../../../data/timer";
import { HomeAssistant } from "../../../../types";
declare class HaTimerForm extends LitElement {
    hass: HomeAssistant;
    new: boolean;
    private _item?;
    private _name;
    private _icon;
    private _duration;
    private _restore;
    set item(item: Timer);
    focus(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _toggleRestore;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-timer-form": HaTimerForm;
    }
}
export {};
