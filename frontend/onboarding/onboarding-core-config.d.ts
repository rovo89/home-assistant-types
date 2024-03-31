import "@material/mwc-button/mwc-button";
import { CSSResultGroup, LitElement, PropertyValues, TemplateResult } from "lit";
import type { LocalizeFunc } from "../common/translations/localize";
import "../components/ha-alert";
import "../components/ha-circular-progress";
import "../components/ha-country-picker";
import type { HomeAssistant } from "../types";
import "./onboarding-location";
declare class OnboardingCoreConfig extends LitElement {
    hass: HomeAssistant;
    onboardingLocalize: LocalizeFunc;
    private _working;
    private _location?;
    private _elevation;
    private _timeZone;
    private _language;
    private _country?;
    private _unitSystem?;
    private _currency?;
    private _error?;
    private _skipCore;
    protected render(): TemplateResult;
    protected firstUpdated(changedProps: PropertyValues): void;
    private get _countryValue();
    private _handleCountryChanged;
    private _locationChanged;
    private _save;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "onboarding-core-config": OnboardingCoreConfig;
    }
}
export {};
