import "../../../components/entity/ha-state-label-badge";
import { LovelaceBadgeConfig } from "../../../data/lovelace/config/badge";
import { HomeAssistant } from "../../../types";
import { ConfigError } from "./types";
export declare class HuiBadgePreview extends HTMLElement {
    private _hass?;
    private _element?;
    private _config?;
    private get _error();
    constructor();
    set hass(hass: HomeAssistant);
    set error(error: ConfigError);
    set config(configValue: LovelaceBadgeConfig);
    private _createBadge;
    private _cleanup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-badge-preview": HuiBadgePreview;
    }
}
