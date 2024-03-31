import { CSSResultGroup, LitElement, PropertyValues, nothing } from "lit";
import "../../../components/ha-card";
import "../../../components/ha-markdown";
import "../../../components/ha-alert";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCard, LovelaceCardEditor } from "../types";
import type { MarkdownCardConfig } from "./types";
export declare class HuiMarkdownCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(): MarkdownCardConfig;
    hass?: HomeAssistant;
    editMode: boolean;
    private _config?;
    private _error?;
    private _errorLevel?;
    private _templateResult?;
    private _unsubRenderTemplate?;
    getCardSize(): number;
    setConfig(config: MarkdownCardConfig): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected updated(changedProps: PropertyValues): void;
    private _tryConnect;
    private _tryDisconnect;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-markdown-card": HuiMarkdownCard;
    }
}
