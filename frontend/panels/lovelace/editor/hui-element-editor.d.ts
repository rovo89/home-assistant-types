import "@material/mwc-button";
import { CSSResultGroup, LitElement, PropertyValues, TemplateResult } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-circular-progress";
import "../../../components/ha-code-editor";
import type { HaCodeEditor } from "../../../components/ha-code-editor";
import { LovelaceCardConfig } from "../../../data/lovelace/config/card";
import { LovelaceStrategyConfig } from "../../../data/lovelace/config/strategy";
import { LovelaceConfig } from "../../../data/lovelace/config/types";
import type { HomeAssistant } from "../../../types";
import type { LovelaceRowConfig } from "../entity-rows/types";
import { LovelaceHeaderFooterConfig } from "../header-footer/types";
import { LovelaceCardFeatureConfig } from "../card-features/types";
import type { LovelaceConfigForm, LovelaceGenericElementEditor } from "../types";
import "./config-elements/hui-generic-entity-row-editor";
import { EditSubElementEvent, GUIModeChangedEvent } from "./types";
export interface ConfigChangedEvent {
    config: LovelaceCardConfig | LovelaceRowConfig | LovelaceHeaderFooterConfig | LovelaceCardFeatureConfig | LovelaceStrategyConfig;
    error?: string;
    guiModeAvailable?: boolean;
}
declare global {
    interface HASSDomEvents {
        "config-changed": ConfigChangedEvent;
        "GUImode-changed": GUIModeChangedEvent;
        "edit-detail-element": EditSubElementEvent;
    }
}
export interface UIConfigChangedEvent extends Event {
    detail: {
        config: LovelaceCardConfig | LovelaceRowConfig | LovelaceHeaderFooterConfig | LovelaceCardFeatureConfig;
    };
}
export declare abstract class HuiElementEditor<T, C = any> extends LitElement {
    hass: HomeAssistant;
    lovelace?: LovelaceConfig;
    context?: C;
    private _yaml?;
    private _config?;
    private _configElement?;
    private _configElementType?;
    private _guiMode;
    private _errors?;
    private _warnings?;
    private _guiSupported?;
    private _loading;
    _yamlEditor?: HaCodeEditor;
    get yaml(): string;
    set yaml(_yaml: string);
    get value(): T | undefined;
    set value(config: T | undefined);
    private _setConfig;
    get hasWarning(): boolean;
    get hasError(): boolean;
    get GUImode(): boolean;
    set GUImode(guiMode: boolean);
    toggleMode(): void;
    focusYamlEditor(): void;
    protected getConfigElement(): Promise<LovelaceGenericElementEditor | undefined>;
    protected getConfigForm(): Promise<LovelaceConfigForm | undefined>;
    protected get configElementType(): string | undefined;
    protected render(): TemplateResult;
    protected updated(changedProperties: PropertyValues): void;
    private _handleUIConfigChanged;
    private _handleYAMLChanged;
    private _updateConfigElement;
    private _ignoreKeydown;
    static get styles(): CSSResultGroup;
}
