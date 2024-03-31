import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-dialog";
import "../../../../components/ha-dialog-header";
import "../../../../components/ha-icon-button-toggle";
import type { EntityRegistryEntry } from "../../../../data/entity_registry";
import { LightColor, LightEntity } from "../../../../data/light";
import type { HomeAssistant } from "../../../../types";
import "./light-color-rgb-picker";
import "./light-color-temp-picker";
import type { LightColorFavoriteDialogParams } from "./show-dialog-light-color-favorite";
export type LightPickerMode = "color_temp" | "color";
declare class DialogLightColorFavorite extends LitElement {
    hass: HomeAssistant;
    _dialogParams?: LightColorFavoriteDialogParams;
    _entry?: EntityRegistryEntry;
    _color?: LightColor;
    private _mode?;
    private _modes;
    private _currentValue?;
    private _colorHovered;
    showDialog(dialogParams: LightColorFavoriteDialogParams): Promise<void>;
    closeDialog(): void;
    private _updateModes;
    private _computeCurrentColor;
    private _colorChanged;
    get stateObj(): LightEntity;
    private _cancel;
    private _save;
    private _modeChanged;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-light-color-favorite": DialogLightColorFavorite;
    }
}
export {};
