import "@lrnwebcomponents/simple-tooltip/simple-tooltip";
import { LitElement, TemplateResult } from "lit";
import { HomeAssistant } from "../types";
import "./ha-button-menu";
import "./ha-icon-button";
import "./ha-list-item";
import "./ha-svg-icon";
export interface IconOverflowMenuItem {
    [key: string]: any;
    path: string;
    label: string;
    narrowOnly?: boolean;
    disabled?: boolean;
    tooltip?: string;
    action: () => any;
    warning?: boolean;
    divider?: boolean;
}
export declare class HaIconOverflowMenu extends LitElement {
    hass: HomeAssistant;
    items: IconOverflowMenuItem[];
    narrow: boolean;
    protected render(): TemplateResult;
    protected _handleIconOverflowMenuOpened(e: any): void;
    protected _handleIconOverflowMenuClosed(): void;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-icon-overflow-menu": HaIconOverflowMenu;
    }
}
