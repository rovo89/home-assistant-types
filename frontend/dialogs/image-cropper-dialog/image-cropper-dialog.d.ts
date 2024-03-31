import "@material/mwc-button/mwc-button";
import { CSSResultGroup, LitElement, PropertyValues, TemplateResult } from "lit";
import "../../components/ha-dialog";
import type { HomeAssistant } from "../../types";
import { HaImageCropperDialogParams } from "./show-image-cropper-dialog";
export declare class HaImagecropperDialog extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _open;
    private _image;
    private _cropper?;
    showDialog(params: HaImageCropperDialogParams): void;
    closeDialog(): void;
    protected updated(changedProperties: PropertyValues): void;
    protected render(): TemplateResult;
    private _cropImage;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "image-cropper-dialog": HaImagecropperDialog;
    }
}
