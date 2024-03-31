import { CSSResultGroup, LitElement, PropertyValues, nothing } from "lit";
import { HomeAssistant } from "../../../types";
import { LovelaceCard, LovelaceCardEditor } from "../types";
import { StackCardConfig } from "./types";
export declare abstract class HuiStackCard<T extends StackCardConfig = StackCardConfig> extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(): Record<string, unknown>;
    hass?: HomeAssistant;
    editMode: boolean;
    protected _cards?: LovelaceCard[];
    protected _config?: T;
    isPanel: boolean;
    getCardSize(): number | Promise<number>;
    setConfig(config: T): void;
    protected updated(changedProps: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get sharedStyles(): CSSResultGroup;
    private _createCardElement;
    private _rebuildCard;
}
