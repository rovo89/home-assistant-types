import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import type { LocalizeFunc } from "../common/translations/localize";
import type { HomeAssistant } from "../types";
import "../components/ha-button";
declare class OnboardingWelcome extends LitElement {
    hass: HomeAssistant;
    localize: LocalizeFunc;
    supervisor: boolean;
    protected render(): TemplateResult;
    private _start;
    private _restoreBackup;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "onboarding-welcome": OnboardingWelcome;
    }
}
export {};
