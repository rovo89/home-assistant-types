import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import "../../components/ha-card";
import "../../components/ha-settings-row";
import "../../components/ha-switch";
import { CoreFrontendUserData } from "../../data/frontend";
import { HomeAssistant } from "../../types";
declare class AdvancedModeRow extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    coreUserData?: CoreFrontendUserData;
    protected render(): TemplateResult;
    private _advancedToggled;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-advanced-mode-row": AdvancedModeRow;
    }
}
export {};
