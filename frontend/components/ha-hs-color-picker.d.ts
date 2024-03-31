import { LitElement, PropertyValues } from "lit";
declare global {
    interface HASSDomEvents {
        "cursor-moved": {
            value?: any;
        };
    }
}
declare class HaHsColorPicker extends LitElement {
    disabled: boolean;
    renderSize?: number;
    value?: [number, number];
    colorBrightness?: number;
    wv?: number;
    cw?: number;
    ww?: number;
    minKelvin?: number;
    maxKelvin?: number;
    private _canvas;
    private _mc?;
    private _pressed?;
    private _cursorPosition?;
    private _localValue?;
    protected firstUpdated(changedProps: PropertyValues): void;
    private _generateColorWheel;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected updated(changedProps: PropertyValues): void;
    _setupListeners(): void;
    private _resetPosition;
    private _getCoordsFromValue;
    private _getValueFromCoord;
    private _getPositionFromEvent;
    _destroyListeners(): void;
    render(): import("lit-html").TemplateResult<1>;
    renderSVGFilter(): import("lit-html").TemplateResult<2>;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-hs-color-picker": HaHsColorPicker;
    }
}
export {};
