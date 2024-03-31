import { SelectBase } from "@material/mwc-select/mwc-select-base";
import "./ha-icon";
import "./ha-svg-icon";
export declare class HaControlSelectMenu extends SelectBase {
    protected mdcRoot: HTMLElement;
    protected anchorElement: HTMLDivElement | null;
    showArrow: boolean;
    hideLabel: boolean;
    private _ripple;
    private _shouldRenderRipple;
    render(): import("lit-html").TemplateResult<1>;
    private renderArrow;
    private renderIcon;
    protected onFocus(): void;
    protected onBlur(): void;
    private _rippleHandlers;
    private handleRippleActivate;
    private handleRippleDeactivate;
    private handleRippleMouseEnter;
    private handleRippleMouseLeave;
    private handleRippleFocus;
    private handleRippleBlur;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _translationsUpdated;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-control-select-menu": HaControlSelectMenu;
    }
}
