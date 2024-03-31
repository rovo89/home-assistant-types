import { CSSResultGroup, LitElement } from "lit";
import "../../../../../components/ha-textfield";
import { RepeatAction } from "../../../../../data/script";
import type { HomeAssistant, ItemPath } from "../../../../../types";
import "../ha-automation-action";
import type { ActionElement } from "../ha-automation-action-row";
import "../../../../../components/ha-form/ha-form";
export declare class HaRepeatAction extends LitElement implements ActionElement {
    hass: HomeAssistant;
    disabled: boolean;
    action: RepeatAction;
    path?: ItemPath;
    static get defaultConfig(): {
        repeat: {
            count: number;
            sequence: any[];
        };
    };
    private _schema;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
    static get styles(): CSSResultGroup;
    private _computeLabelCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-action-repeat": HaRepeatAction;
    }
}
