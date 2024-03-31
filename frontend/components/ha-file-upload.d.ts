import "@material/mwc-linear-progress/mwc-linear-progress";
import { LitElement, PropertyValues, TemplateResult } from "lit";
import { HomeAssistant } from "../types";
import "./ha-button";
import "./ha-icon-button";
declare global {
    interface HASSDomEvents {
        "file-picked": {
            files: File[];
        };
    }
}
export declare class HaFileUpload extends LitElement {
    hass?: HomeAssistant;
    accept: string;
    icon?: string;
    label?: string;
    secondary?: string;
    supports?: string;
    value?: File | File[] | FileList | string;
    multiple: boolean;
    disabled: boolean;
    uploading: boolean;
    progress?: number;
    autoOpenFileDialog: boolean;
    private _drag;
    private _input?;
    protected firstUpdated(changedProperties: PropertyValues): void;
    render(): TemplateResult;
    private _openFilePicker;
    private _handleDrop;
    private _handleDragStart;
    private _handleDragEnd;
    private _handleFilePicked;
    private _clearValue;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-file-upload": HaFileUpload;
    }
}
