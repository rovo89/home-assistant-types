import { Schema } from "js-yaml";
import { CSSResultGroup, LitElement, nothing, PropertyValues } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-code-editor";
export declare class HaYamlEditor extends LitElement {
    hass: HomeAssistant;
    value?: any;
    yamlSchema: Schema;
    defaultValue?: any;
    isValid: boolean;
    label?: string;
    autoUpdate: boolean;
    readOnly: boolean;
    required: boolean;
    copyClipboard: boolean;
    private _yaml;
    setValue(value: any): void;
    protected firstUpdated(): void;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _onChange;
    get yaml(): string;
    private _copyYaml;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-yaml-editor": HaYamlEditor;
    }
}
