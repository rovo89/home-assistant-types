import "@material/mwc-list/mwc-list-item";
import { CSSResultGroup, LitElement, PropertyValues, nothing } from "lit";
import "../../../../components/ha-alert";
import "../../../../components/ha-button-menu";
import "../../../../components/ha-card";
import "../../../../components/ha-expansion-panel";
import "../../../../components/ha-icon-button";
import "../../../../components/ha-service-icon";
import { AutomationClipboard } from "../../../../data/automation";
import { EntityRegistryEntry } from "../../../../data/entity_registry";
import { Action } from "../../../../data/script";
import type { HomeAssistant, ItemPath } from "../../../../types";
import "./types/ha-automation-action-activate_scene";
import "./types/ha-automation-action-choose";
import "./types/ha-automation-action-condition";
import "./types/ha-automation-action-delay";
import "./types/ha-automation-action-device_id";
import "./types/ha-automation-action-event";
import "./types/ha-automation-action-if";
import "./types/ha-automation-action-parallel";
import "./types/ha-automation-action-play_media";
import "./types/ha-automation-action-repeat";
import "./types/ha-automation-action-service";
import "./types/ha-automation-action-set_conversation_response";
import "./types/ha-automation-action-stop";
import "./types/ha-automation-action-wait_for_trigger";
import "./types/ha-automation-action-wait_template";
export declare const getType: (action: Action | undefined) => "service" | "stop" | "parallel" | "event" | "condition" | "play_media" | "delay" | "wait_template" | "wait_for_trigger" | "device_id" | "activate_scene" | "repeat" | "choose" | "if" | "variables" | "set_conversation_response";
export interface ActionElement extends LitElement {
    action: Action;
}
export declare const handleChangeEvent: (element: ActionElement, ev: CustomEvent) => void;
export default class HaAutomationActionRow extends LitElement {
    hass: HomeAssistant;
    action: Action;
    narrow: boolean;
    disabled: boolean;
    path?: ItemPath;
    first?: boolean;
    last?: boolean;
    _clipboard?: AutomationClipboard;
    _entityReg: EntityRegistryEntry[];
    private _warnings?;
    private _uiModeAvailable;
    private _yamlMode;
    private _yamlEditor?;
    protected willUpdate(changedProperties: PropertyValues): void;
    protected updated(changedProperties: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleUiModeNotAvailable;
    private _handleAction;
    private _setClipboard;
    private _onDisable;
    private _runAction;
    private _onDelete;
    private _onYamlChange;
    private _onUiChanged;
    private _switchUiMode;
    private _switchYamlMode;
    private _renameAction;
    expand(): void;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-action-row": HaAutomationActionRow;
    }
}
