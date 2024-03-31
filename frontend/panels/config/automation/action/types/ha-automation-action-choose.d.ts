import { CSSResultGroup, LitElement, PropertyValues } from "lit";
import "../../../../../components/ha-button";
import "../../../../../components/ha-button-menu";
import "../../../../../components/ha-icon-button";
import "../../../../../components/ha-sortable";
import { EntityRegistryEntry } from "../../../../../data/entity_registry";
import { ChooseAction } from "../../../../../data/script";
import { HomeAssistant, ItemPath } from "../../../../../types";
import { ActionElement } from "../ha-automation-action-row";
export declare class HaChooseAction extends LitElement implements ActionElement {
    hass: HomeAssistant;
    disabled: boolean;
    path?: ItemPath;
    action: ChooseAction;
    private _showDefault;
    private _expandedStates;
    _entityReg: EntityRegistryEntry[];
    private _showReorder;
    private _expandLast;
    private _unsubMql?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    static get defaultConfig(): {
        choose: {
            conditions: any[];
            sequence: any[];
        }[];
    };
    private _expandedChanged;
    private _getDescription;
    protected render(): import("lit-html").TemplateResult<1>;
    private _handleAction;
    private _renameAction;
    private _duplicateOption;
    protected firstUpdated(): void;
    protected updated(changedProps: PropertyValues): void;
    private _addDefault;
    private _conditionChanged;
    private _actionChanged;
    private _addOption;
    private _createOption;
    private _moveUp;
    private _moveDown;
    private _move;
    private _removeOption;
    private _defaultChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-action-choose": HaChooseAction;
    }
}
