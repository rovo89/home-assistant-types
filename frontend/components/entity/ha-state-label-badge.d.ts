import { HassEntity } from "home-assistant-js-websocket";
import { CSSResultGroup, LitElement, PropertyValues, TemplateResult } from "lit";
import { HomeAssistant } from "../../types";
import "../ha-label-badge";
import "../ha-state-icon";
export declare class HaStateLabelBadge extends LitElement {
    hass?: HomeAssistant;
    state?: HassEntity;
    name?: string;
    icon?: string;
    image?: string;
    showName: boolean;
    private _timerTimeRemaining?;
    private _connected?;
    private _updateRemaining?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected render(): TemplateResult;
    protected updated(changedProperties: PropertyValues): void;
    private _computeValue;
    private _computeShowIcon;
    private _computeLabel;
    private clearInterval;
    private startInterval;
    private calculateTimerRemaining;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-state-label-badge": HaStateLabelBadge;
    }
}
