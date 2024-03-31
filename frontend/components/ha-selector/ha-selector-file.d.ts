import { LitElement, PropertyValues } from "lit";
import { FileSelector } from "../../data/selector";
import { HomeAssistant } from "../../types";
import "../ha-file-upload";
export declare class HaFileSelector extends LitElement {
    hass: HomeAssistant;
    selector: FileSelector;
    value?: string;
    label?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    private _filename?;
    private _busy;
    protected render(): import("lit-html").TemplateResult<1>;
    protected willUpdate(changedProps: PropertyValues): void;
    private _uploadFile;
    private _removeFile;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-file": HaFileSelector;
    }
}
