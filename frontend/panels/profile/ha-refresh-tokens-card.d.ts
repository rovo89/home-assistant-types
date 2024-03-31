import "@lrnwebcomponents/simple-tooltip/simple-tooltip";
import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import "../../components/ha-card";
import "../../components/ha-settings-row";
import "../../components/ha-icon-button";
import { RefreshToken } from "../../data/refresh_token";
import { HomeAssistant } from "../../types";
declare class HaRefreshTokens extends LitElement {
    hass: HomeAssistant;
    refreshTokens?: RefreshToken[];
    private _refreshTokens;
    protected render(): TemplateResult;
    private _deleteToken;
    private _deleteAllTokens;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-refresh-tokens-card": HaRefreshTokens;
    }
}
export {};
