import { LitElement, TemplateResult } from "lit";
import { CropOptions } from "../dialogs/image-cropper-dialog/show-image-cropper-dialog";
import { HomeAssistant } from "../types";
import "./ha-button";
import "./ha-circular-progress";
import "./ha-file-upload";
export declare class HaPictureUpload extends LitElement {
    hass: HomeAssistant;
    value: string | null;
    label?: string;
    secondary?: string;
    supports?: string;
    currentImageAltText?: string;
    crop: boolean;
    cropOptions?: CropOptions;
    size: number;
    private _uploading;
    render(): TemplateResult;
    private _handleChangeClick;
    private _handleFilePicked;
    private _handleFileCleared;
    private _cropFile;
    private _uploadFile;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-picture-upload": HaPictureUpload;
    }
}
