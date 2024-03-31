import { CSSResultGroup, LitElement, PropertyValues, nothing } from "lit";
import "../../../../components/ha-control-slider";
import { LightColor, LightEntity } from "../../../../data/light";
import { HomeAssistant } from "../../../../types";
declare global {
    interface HASSDomEvents {
        "color-changed": LightColor;
        "color-hovered": LightColor | undefined;
    }
}
export declare const generateColorTemperatureGradient: (min: number, max: number) => string;
declare class LightColorTempPicker extends LitElement {
    hass: HomeAssistant;
    stateObj: LightEntity;
    private _ctPickerValue?;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _generateTemperatureGradient;
    _updateSliderValues(): void;
    willUpdate(changedProps: PropertyValues): void;
    private _ctColorCursorMoved;
    private _throttleUpdateColorTemp;
    private _ctColorChanged;
    private _updateColorTemp;
    private _applyColor;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "light-color-temp-picker": LightColorTempPicker;
    }
}
export {};
