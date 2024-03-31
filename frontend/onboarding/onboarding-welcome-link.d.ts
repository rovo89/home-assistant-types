import "@material/mwc-ripple";
import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import "../components/ha-card";
import "../components/ha-svg-icon";
declare class OnboardingWelcomeLink extends LitElement {
    label: string;
    iconPath: string;
    noninteractive: boolean;
    private _ripple;
    private _shouldRenderRipple;
    protected render(): TemplateResult;
    private _handleKeyDown;
    private _rippleHandlers;
    private handleRippleMouseEnter;
    private handleRippleMouseLeave;
    private handleRippleActivate;
    private handleRippleDeactivate;
    private handleRippleFocus;
    private handleRippleBlur;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "onboarding-welcome-link": OnboardingWelcomeLink;
    }
}
export {};
