import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../../components/entity/ha-entity-picker";
import "../../../../components/ha-formfield";
import "../../../../components/ha-switch";
import "../../../../components/ha-textfield";
import type { HomeAssistant } from "../../../../types";
import { GraphHeaderFooterConfig } from "../../header-footer/types";
import type { LovelaceCardEditor } from "../../types";
export declare class HuiGraphFooterEditor extends LitElement implements LovelaceCardEditor {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: GraphHeaderFooterConfig): void;
    get _entity(): string;
    get _detail(): number;
    get _hours_to_show(): number;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _change;
    private _valueChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-graph-footer-editor": HuiGraphFooterEditor;
    }
}
