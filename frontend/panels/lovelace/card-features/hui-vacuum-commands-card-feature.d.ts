import { HassEntity } from "home-assistant-js-websocket";
import { LitElement, nothing } from "lit";
import "../../../components/ha-control-button";
import "../../../components/ha-control-button-group";
import { VacuumEntity, VacuumEntityFeature } from "../../../data/vacuum";
import { HomeAssistant } from "../../../types";
import { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import { VacuumCommand, VacuumCommandsCardFeatureConfig } from "./types";
interface VacuumButton {
    translationKey: string;
    icon: string;
    serviceName: string;
    disabled?: boolean;
}
export declare const VACUUM_COMMANDS_FEATURES: Record<VacuumCommand, VacuumEntityFeature[]>;
export declare const supportsVacuumCommand: (stateObj: HassEntity, command: VacuumCommand) => boolean;
export declare const VACUUM_COMMANDS_BUTTONS: Record<VacuumCommand, (stateObj: VacuumEntity) => VacuumButton>;
export declare const supportsVacuumCommandsCardFeature: (stateObj: HassEntity) => boolean;
declare class HuiVacuumCommandCardFeature extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    stateObj?: HassEntity;
    private _config?;
    static getStubConfig(_: any, stateObj?: HassEntity): VacuumCommandsCardFeatureConfig;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    setConfig(config: VacuumCommandsCardFeatureConfig): void;
    private _onCommandTap;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-vacuum-commands-card-feature": HuiVacuumCommandCardFeature;
    }
}
export {};
