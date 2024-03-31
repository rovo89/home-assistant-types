import { CSSResultGroup, LitElement, PropertyValues } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-sortable";
import "../../../../components/ha-svg-icon";
import type { AutomationClipboard } from "../../../../data/automation";
import { Action } from "../../../../data/script";
import { HomeAssistant, ItemPath } from "../../../../types";
export default class HaAutomationAction extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    disabled: boolean;
    path?: ItemPath;
    actions: Action[];
    private _showReorder;
    _clipboard?: AutomationClipboard;
    private _focusLastActionOnChange;
    private _actionKeys;
    private _unsubMql?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private get nested();
    protected render(): import("lit-html").TemplateResult<1>;
    protected updated(changedProps: PropertyValues): void;
    private _addActionDialog;
    private _addActionBuildingBlockDialog;
    private _addAction;
    private _getKey;
    private _moveUp;
    private _moveDown;
    private _move;
    private _actionMoved;
    private _actionChanged;
    private _duplicateAction;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-action": HaAutomationAction;
    }
}
