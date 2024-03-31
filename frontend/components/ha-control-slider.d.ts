import { CSSResultGroup, LitElement, PropertyValues, TemplateResult } from "lit";
import { FrontendLocaleData } from "../data/translation";
declare global {
    interface HASSDomEvents {
        "slider-moved": {
            value?: number;
        };
    }
}
type TooltipPosition = "top" | "bottom" | "left" | "right";
type TooltipMode = "never" | "always" | "interaction";
type SliderMode = "start" | "end" | "cursor";
export declare class HaControlSlider extends LitElement {
    locale?: FrontendLocaleData;
    disabled: boolean;
    mode?: SliderMode;
    vertical: boolean;
    showHandle: boolean;
    inverted: boolean;
    tooltipPosition?: TooltipPosition;
    unit?: string;
    tooltipMode: TooltipMode;
    value?: number;
    step: number;
    min: number;
    max: number;
    pressed: boolean;
    tooltipVisible: boolean;
    private _mc?;
    valueToPercentage(value: number): number;
    percentageToValue(percentage: number): number;
    steppedValue(value: number): number;
    boundedValue(value: number): number;
    protected firstUpdated(changedProperties: PropertyValues): void;
    protected updated(changedProps: PropertyValues): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private slider;
    setupListeners(): void;
    destroyListeners(): void;
    private get _tenPercentStep();
    _showTooltip(): void;
    _hideTooltip(delay?: number): void;
    _handleKeyDown(e: KeyboardEvent): void;
    private _tooltipTimeout?;
    _handleKeyUp(e: KeyboardEvent): void;
    private _getPercentageFromEvent;
    private _formatValue;
    private _renderTooltip;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-control-slider": HaControlSlider;
    }
}
export {};
