import { LitElement } from "lit";
import "./ha-icon-button";
import "./ha-svg-icon";
declare global {
    interface HASSDomEvents {
        "alert-dismissed-clicked": undefined;
    }
}
declare class HaAlert extends LitElement {
    title: string;
    alertType: "info" | "warning" | "error" | "success";
    dismissable: boolean;
    render(): import("lit-html").TemplateResult<1>;
    private _dismiss_clicked;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-alert": HaAlert;
    }
}
export {};
