import "@material/mwc-button/mwc-button";
import "@material/mwc-list/mwc-list-item";
import { LitElement, PropertyValues, TemplateResult } from "lit";
import { LocalizeFunc } from "../common/translations/localize";
import "./ha-alert";
import "./ha-button-menu";
import "./ha-textfield";
declare class HaQrScanner extends LitElement {
    localize: LocalizeFunc;
    private _cameras?;
    private _error?;
    private _qrScanner?;
    private _qrNotFoundCount;
    private _video;
    private _canvasContainer;
    private _manualInput?;
    disconnectedCallback(): void;
    connectedCallback(): void;
    protected firstUpdated(): void;
    protected updated(changedProps: PropertyValues): void;
    protected render(): TemplateResult;
    private _loadQrScanner;
    private _listCameras;
    private _qrCodeError;
    private _qrCodeScanned;
    private _manualKeyup;
    private _manualPaste;
    private _manualSubmit;
    private _cameraChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HASSDomEvents {
        "qr-code-scanned": {
            value: string;
        };
        "qr-code-error": {
            message: string;
        };
    }
    interface HTMLElementTagNameMap {
        "ha-qr-scanner": HaQrScanner;
    }
}
export {};
