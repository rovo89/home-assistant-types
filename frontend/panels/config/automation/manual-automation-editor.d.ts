import "@material/mwc-button/mwc-button";
import { HassEntity } from "home-assistant-js-websocket";
import { CSSResultGroup, LitElement } from "lit";
import "../../../components/ha-card";
import "../../../components/ha-icon-button";
import "../../../components/ha-markdown";
import { ManualAutomationConfig } from "../../../data/automation";
import type { HomeAssistant } from "../../../types";
import "./action/ha-automation-action";
import "./condition/ha-automation-condition";
import "./trigger/ha-automation-trigger";
export declare class HaManualAutomationEditor extends LitElement {
    hass: HomeAssistant;
    isWide: boolean;
    narrow: boolean;
    disabled: boolean;
    config: ManualAutomationConfig;
    stateObj?: HassEntity;
    protected render(): import("lit-html").TemplateResult<1>;
    private _triggerChanged;
    private _conditionChanged;
    private _actionChanged;
    private _itemMoved;
    private _enable;
    private _duplicate;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "manual-automation-editor": HaManualAutomationEditor;
    }
}
