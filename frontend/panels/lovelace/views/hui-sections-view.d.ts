import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../components/ha-icon-button";
import "../../../components/ha-sortable";
import "../../../components/ha-svg-icon";
import type { LovelaceViewElement } from "../../../data/lovelace";
import type { LovelaceViewConfig } from "../../../data/lovelace/config/view";
import type { HomeAssistant } from "../../../types";
import { HuiSection } from "../sections/hui-section";
import type { Lovelace, LovelaceBadge } from "../types";
export declare class SectionsView extends LitElement implements LovelaceViewElement {
    hass: HomeAssistant;
    lovelace?: Lovelace;
    index?: number;
    isStrategy: boolean;
    sections: HuiSection[];
    badges: LovelaceBadge[];
    private _config?;
    setConfig(config: LovelaceViewConfig): void;
    private _sectionConfigKeys;
    private _getKey;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _createSection;
    private _editSection;
    private _deleteSection;
    private _sectionMoved;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-sections-view": SectionsView;
    }
}
