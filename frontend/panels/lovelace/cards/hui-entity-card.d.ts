import { CSSResultGroup, LitElement, nothing, PropertyValues } from "lit";
import "../../../components/ha-attribute-value";
import "../../../components/ha-card";
import "../../../components/ha-icon";
import { HomeAssistant } from "../../../types";
import { LovelaceCard } from "../types";
import { EntityCardConfig } from "./types";
export declare class HuiEntityCard extends LitElement implements LovelaceCard {
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFill: string[]): {
        entity: any;
    };
    static getConfigForm(): Promise<import("../types").LovelaceConfigForm>;
    hass?: HomeAssistant;
    private _config?;
    private _footerElement?;
    private getStateColor;
    setConfig(config: EntityCardConfig): void;
    getCardSize(): Promise<number>;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _computeColor;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected updated(changedProps: PropertyValues): void;
    private _handleClick;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-entity-card": HuiEntityCard;
    }
}
