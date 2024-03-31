import "@material/mwc-button/mwc-button";
import "@material/mwc-list/mwc-list-item";
import { CSSResultGroup, LitElement, PropertyValues, TemplateResult } from "lit";
import "../../components/ha-formfield";
import "../../components/ha-radio";
import "../../components/ha-select";
import "../../components/ha-settings-row";
import "../../components/ha-textfield";
import { HomeAssistant } from "../../types";
export declare class HaPickThemeRow extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    _themeNames: string[];
    protected render(): TemplateResult;
    willUpdate(changedProperties: PropertyValues): void;
    private _handleColorChange;
    private _resetColors;
    private _supportsModeSelection;
    private _handleDarkMode;
    private _handleThemeSelection;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-pick-theme-row": HaPickThemeRow;
    }
}
