import { HassEntity } from "home-assistant-js-websocket";
import { LitElement, nothing } from "lit";
import "../../../components/ha-control-button";
import "../../../components/ha-control-button-group";
import { LawnMowerEntity, LawnMowerEntityFeature } from "../../../data/lawn_mower";
import { HomeAssistant } from "../../../types";
import { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import { LawnMowerCommand, LawnMowerCommandsCardFeatureConfig } from "./types";
interface LawnMowerButton {
    translationKey: string;
    icon: string;
    serviceName: string;
    disabled?: boolean;
}
export declare const LAWN_MOWER_COMMANDS_FEATURES: Record<LawnMowerCommand, LawnMowerEntityFeature[]>;
export declare const supportsLawnMowerCommand: (stateObj: HassEntity, command: LawnMowerCommand) => boolean;
export declare const LAWN_MOWER_COMMANDS_BUTTONS: Record<LawnMowerCommand, (stateObj: LawnMowerEntity) => LawnMowerButton>;
export declare const supportsLawnMowerCommandCardFeature: (stateObj: HassEntity) => boolean;
declare class HuiLawnMowerCommandCardFeature extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    stateObj?: HassEntity;
    private _config?;
    static getStubConfig(_: any, stateObj?: HassEntity): LawnMowerCommandsCardFeatureConfig;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    setConfig(config: LawnMowerCommandsCardFeatureConfig): void;
    private _onCommandTap;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-lawn-mower-commands-card-feature": HuiLawnMowerCommandCardFeature;
    }
}
export {};
