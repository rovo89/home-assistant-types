import "@material/mwc-list/mwc-list";
import { LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-card";
import "../../../components/ha-list-item";
import "../../../components/ha-svg-icon";
import { type RepairsIssue } from "../../../data/repairs";
import type { HomeAssistant } from "../../../types";
declare class HaConfigRepairs extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    repairsIssues?: RepairsIssue[];
    total?: number;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _openShowMoreDialog;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-repairs": HaConfigRepairs;
    }
}
export {};
