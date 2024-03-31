import "@material/mwc-ripple/mwc-ripple";
import { CSSResultGroup, LitElement, TemplateResult } from "lit";
export declare class HaTab extends LitElement {
    active: boolean;
    narrow: boolean;
    name?: string;
    private _ripple;
    private _shouldRenderRipple;
    protected render(): TemplateResult;
    private _rippleHandlers;
    private _handleKeyDown;
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
        "ha-tab": HaTab;
    }
}
