import "@material/mwc-icon-button";
import type { IconButton } from "@material/mwc-icon-button";
import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import "./ha-svg-icon";
export declare class HaIconButton extends LitElement {
    disabled: boolean;
    path?: string;
    label?: string;
    ariaHasPopup: IconButton["ariaHasPopup"];
    hideTitle: boolean;
    private _button?;
    focus(): void;
    static shadowRootOptions: ShadowRootInit;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-icon-button": HaIconButton;
    }
}
