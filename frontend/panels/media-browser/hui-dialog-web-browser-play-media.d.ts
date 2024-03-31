import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../components/ha-hls-player";
import type { HomeAssistant } from "../../types";
import { WebBrowserPlayMediaDialogParams } from "./show-media-player-dialog";
export declare class HuiDialogWebBrowserPlayMedia extends LitElement {
    hass: HomeAssistant;
    private _params?;
    showDialog(params: WebBrowserPlayMediaDialogParams): void;
    closeDialog(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-dialog-web-browser-play-media": HuiDialogWebBrowserPlayMedia;
    }
}
