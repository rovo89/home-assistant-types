import "@material/mwc-list/mwc-list";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../components/ha-circular-progress";
import "../../components/ha-expansion-panel";
import "../../components/ha-list-item";
import { HomeAssistant } from "../../types";
declare class DialogRestart extends LitElement {
    hass: HomeAssistant;
    private _open;
    private _loadingHostInfo;
    private _hostInfo?;
    showDialog(): Promise<void>;
    closeDialog(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _reload;
    private _restart;
    private _showRestartDialog;
    private _restartSafeMode;
    private _showRestartSafeModeDialog;
    private _hostReboot;
    private _hostShutdown;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-restart": DialogRestart;
    }
}
export {};
