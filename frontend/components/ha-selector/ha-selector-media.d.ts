import { CSSResultGroup, LitElement, PropertyValues } from "lit";
import type { MediaSelector, MediaSelectorValue } from "../../data/selector";
import type { HomeAssistant } from "../../types";
import "../ha-alert";
import "../ha-form/ha-form";
export declare class HaMediaSelector extends LitElement {
    hass: HomeAssistant;
    selector: MediaSelector;
    value?: MediaSelectorValue;
    label?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    private _thumbnailUrl?;
    willUpdate(changedProps: PropertyValues<this>): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _computeLabelCallback;
    private _entityChanged;
    private _pickMedia;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-media": HaMediaSelector;
    }
}
