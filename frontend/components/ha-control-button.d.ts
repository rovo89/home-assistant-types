import { CSSResultGroup, LitElement, TemplateResult } from "lit";
export declare class HaControlButton extends LitElement {
    disabled: boolean;
    label?: string;
    private _ripple;
    private _shouldRenderRipple;
    protected render(): TemplateResult;
    private _rippleHandlers;
    private handleRippleActivate;
    private handleRippleDeactivate;
    private handleRippleMouseEnter;
    private handleRippleMouseLeave;
    private handleRippleFocus;
    private handleRippleBlur;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-control-button": HaControlButton;
    }
}
