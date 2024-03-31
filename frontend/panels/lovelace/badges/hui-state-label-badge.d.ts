import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../components/entity/ha-state-label-badge";
import { HomeAssistant } from "../../../types";
import { LovelaceBadge } from "../types";
import { StateLabelBadgeConfig } from "./types";
export declare class HuiStateLabelBadge extends LitElement implements LovelaceBadge {
    hass?: HomeAssistant;
    protected _config?: StateLabelBadgeConfig;
    setConfig(config: StateLabelBadgeConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleAction;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-state-label-badge": HuiStateLabelBadge;
    }
}
