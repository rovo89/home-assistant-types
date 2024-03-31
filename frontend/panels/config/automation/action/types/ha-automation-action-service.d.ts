import { CSSResultGroup, LitElement, nothing, PropertyValues } from "lit";
import "../../../../../components/ha-service-control";
import { ServiceAction } from "../../../../../data/script";
import type { HomeAssistant } from "../../../../../types";
import { ActionElement } from "../ha-automation-action-row";
export declare class HaServiceAction extends LitElement implements ActionElement {
    hass: HomeAssistant;
    action: ServiceAction;
    disabled: boolean;
    narrow: boolean;
    private _action?;
    private _responseChecked;
    private _fields;
    static get defaultConfig(): {
        service: string;
        data: {};
    };
    protected willUpdate(changedProperties: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _actionChanged;
    private _responseVariableChanged;
    private _responseCheckboxChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-action-service": HaServiceAction;
    }
}
