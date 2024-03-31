import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import "@material/mwc-button";
import "../../components/ha-card";
import "../../components/ha-menu-button";
import "../../components/ha-tabs";
import "@polymer/paper-tabs/paper-tab";
import { HomeAssistant } from "../../types";
import "../../components/ha-top-app-bar-fixed";
declare class HaPanelMailbox extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    platforms?: any[];
    private _messages?;
    private _currentPlatform;
    private _unsubEvents?;
    protected render(): TemplateResult;
    connectedCallback(): void;
    disconnectedCallback(): void;
    hassChanged(): void;
    private _openMP3Dialog;
    private _getMessages;
    private _computePlatforms;
    private _handlePlatformSelected;
    private _areTabsHidden;
    private _getPlatformName;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-panel-mailbox": HaPanelMailbox;
    }
}
declare global {
    interface HASSDomEvents {
        "show-audio-message-dialog": {
            hass: HomeAssistant;
            message: string;
        };
    }
}
export {};
