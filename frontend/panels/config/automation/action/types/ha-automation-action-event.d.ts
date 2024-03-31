import { CSSResultGroup, LitElement, PropertyValues } from "lit";
import "../../../../../components/entity/ha-entity-picker";
import "../../../../../components/ha-service-picker";
import "../../../../../components/ha-textfield";
import "../../../../../components/ha-yaml-editor";
import type { EventAction } from "../../../../../data/script";
import type { HomeAssistant } from "../../../../../types";
import { ActionElement } from "../ha-automation-action-row";
export declare class HaEventAction extends LitElement implements ActionElement {
    hass: HomeAssistant;
    disabled: boolean;
    action: EventAction;
    private _yamlEditor?;
    private _actionData?;
    static get defaultConfig(): EventAction;
    protected updated(changedProperties: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _dataChanged;
    private _eventChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-action-event": HaEventAction;
    }
}
