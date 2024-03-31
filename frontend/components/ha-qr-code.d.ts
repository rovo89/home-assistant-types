import { LitElement, PropertyValues, nothing } from "lit";
import "./ha-alert";
export declare class HaQrCode extends LitElement {
    data?: string;
    errorCorrectionLevel: "low" | "medium" | "quartile" | "high";
    width: number;
    scale: number;
    margin: number;
    maskPattern?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
    centerImage?: string;
    private _error?;
    private _canvas?;
    protected willUpdate(changedProperties: PropertyValues): void;
    updated(changedProperties: PropertyValues): void;
    render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-qr-code": HaQrCode;
    }
}
