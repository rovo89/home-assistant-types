import { LitElement, TemplateResult } from "lit";
import "../../../components/ha-settings-row";
import "../../../components/ha-switch";
import type { HomeAssistant } from "../../../types";
declare class HaDebugConnectionRow extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    protected render(): TemplateResult;
    private _checkedChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-debug-connection-row": HaDebugConnectionRow;
    }
}
export {};
