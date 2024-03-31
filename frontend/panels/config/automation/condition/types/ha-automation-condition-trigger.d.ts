import "@material/mwc-list/mwc-list-item";
import { LitElement } from "lit";
import "../../../../../components/ha-form/ha-form";
import "../../../../../components/ha-select";
import type { TriggerCondition } from "../../../../../data/automation";
import type { HomeAssistant } from "../../../../../types";
export declare class HaTriggerCondition extends LitElement {
    hass: HomeAssistant;
    condition: TriggerCondition;
    disabled: boolean;
    private _triggers;
    private _unsub?;
    static get defaultConfig(): {
        id: string;
    };
    private _schema;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected render(): string | import("lit-html").TemplateResult<1>;
    private _computeLabelCallback;
    private _automationUpdated;
    private _valueChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-condition-trigger": HaTriggerCondition;
    }
}
