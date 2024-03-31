import "@material/mwc-button";
import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import "../../components/ha-card";
import { HomeAssistant, MFAModule } from "../../types";
declare class HaMfaModulesCard extends LitElement {
    hass: HomeAssistant;
    mfaModules: MFAModule[];
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
    private _enable;
    private _disable;
    private _refreshCurrentUser;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-mfa-modules-card": HaMfaModulesCard;
    }
}
export {};
