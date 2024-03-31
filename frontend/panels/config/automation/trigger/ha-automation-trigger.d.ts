import { CSSResultGroup, LitElement, PropertyValues } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-button-menu";
import "../../../../components/ha-sortable";
import "../../../../components/ha-svg-icon";
import { AutomationClipboard, Trigger } from "../../../../data/automation";
import { HomeAssistant, ItemPath } from "../../../../types";
import "./ha-automation-trigger-row";
export default class HaAutomationTrigger extends LitElement {
    hass: HomeAssistant;
    triggers: Trigger[];
    disabled: boolean;
    path?: ItemPath;
    private _showReorder;
    _clipboard?: AutomationClipboard;
    private _focusLastTriggerOnChange;
    private _triggerKeys;
    private _unsubMql?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private get nested();
    protected render(): import("lit-html").TemplateResult<1>;
    private _addTriggerDialog;
    private _addTrigger;
    protected updated(changedProps: PropertyValues): void;
    private _getKey;
    private _moveUp;
    private _moveDown;
    private _move;
    private _triggerMoved;
    private _triggerChanged;
    private _duplicateTrigger;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-trigger": HaAutomationTrigger;
    }
}
