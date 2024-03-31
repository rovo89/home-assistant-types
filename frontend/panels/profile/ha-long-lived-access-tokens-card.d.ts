import "@material/mwc-button/mwc-button";
import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import "../../components/ha-card";
import "../../components/ha-settings-row";
import "../../components/ha-icon-button";
import { RefreshToken } from "../../data/refresh_token";
import { HomeAssistant } from "../../types";
declare class HaLongLivedTokens extends LitElement {
    hass: HomeAssistant;
    refreshTokens?: RefreshToken[];
    private _accessTokens;
    protected render(): TemplateResult;
    private _createToken;
    private _deleteToken;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-long-lived-access-tokens-card": HaLongLivedTokens;
    }
}
export {};
