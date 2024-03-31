import "@material/mwc-list/mwc-list-item";
import { LitElement, TemplateResult } from "lit";
import "../../components/ha-card";
import "../../components/ha-select";
import "../../components/ha-settings-row";
import { HomeAssistant } from "../../types";
declare class NumberFormatRow extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    protected render(): TemplateResult;
    private _handleFormatSelection;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-pick-number-format-row": NumberFormatRow;
    }
}
export {};
