import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import type { ToggleButton } from "../types";
import "./ha-icon-button";
export declare class HaButtonToggleGroup extends LitElement {
    buttons: ToggleButton[];
    active?: string;
    fullWidth: boolean;
    dense: boolean;
    private _buttons?;
    protected render(): TemplateResult;
    protected updated(): void;
    private _handleClick;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-button-toggle-group": HaButtonToggleGroup;
    }
}
