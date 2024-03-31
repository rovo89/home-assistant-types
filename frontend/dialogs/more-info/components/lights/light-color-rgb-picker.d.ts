import "@material/mwc-button";
import { CSSResultGroup, LitElement, nothing, PropertyValues } from "lit";
import "../../../../components/ha-button-toggle-group";
import "../../../../components/ha-hs-color-picker";
import "../../../../components/ha-icon";
import "../../../../components/ha-icon-button-prev";
import "../../../../components/ha-labeled-slider";
import { LightColor, LightEntity } from "../../../../data/light";
import { HomeAssistant } from "../../../../types";
declare global {
    interface HASSDomEvents {
        "color-changed": LightColor;
    }
}
declare class LightRgbColorPicker extends LitElement {
    hass: HomeAssistant;
    stateObj: LightEntity;
    private _cwSliderValue?;
    private _wwSliderValue?;
    private _wvSliderValue?;
    private _colorBrightnessSliderValue?;
    private _brightnessAdjusted?;
    private _hsPickerValue?;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    _updateSliderValues(): void;
    willUpdate(changedProps: PropertyValues): void;
    private _hsColorCursorMoved;
    private _throttleUpdateColor;
    private _updateColor;
    private _nativeColorChanged;
    private _hsColorChanged;
    private _wvSliderChanged;
    private _applyColor;
    private _colorBrightnessSliderChanged;
    private _adjustColorBrightness;
    private _setRgbWColor;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "light-color-rgb-picker": LightRgbColorPicker;
    }
}
export {};
