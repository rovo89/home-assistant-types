import { CSSResultGroup, LitElement, TemplateResult } from "lit";
declare class OnboardingLoading extends LitElement {
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "onboarding-loading": OnboardingLoading;
    }
}
export {};
