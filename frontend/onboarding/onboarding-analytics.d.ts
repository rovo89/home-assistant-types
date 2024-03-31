import "@material/mwc-button/mwc-button";
import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import { LocalizeFunc } from "../common/translations/localize";
import "../components/ha-analytics";
import "../components/ha-svg-icon";
import type { HomeAssistant } from "../types";
declare class OnboardingAnalytics extends LitElement {
    hass: HomeAssistant;
    localize: LocalizeFunc;
    private _error?;
    private _analyticsDetails;
    protected render(): TemplateResult;
    protected firstUpdated(changedProps: any): void;
    private _preferencesChanged;
    private _save;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "onboarding-analytics": OnboardingAnalytics;
    }
}
export {};
