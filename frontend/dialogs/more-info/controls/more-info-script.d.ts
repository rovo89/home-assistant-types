import "@material/mwc-button";
import { CSSResultGroup, LitElement, nothing, PropertyValues } from "lit";
import "../../../components/ha-relative-time";
import "../../../components/ha-service-control";
import "../../../components/ha-control-button";
import "../../../components/ha-control-button-group";
import "../../../components/entity/state-info";
import { HomeAssistant } from "../../../types";
import { ScriptEntity } from "../../../data/script";
import "../components/ha-more-info-state-header";
declare class MoreInfoScript extends LitElement {
    hass: HomeAssistant;
    stateObj?: ScriptEntity;
    private _scriptData;
    private narrow;
    private _unsubMediaQuery?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected willUpdate(changedProperties: PropertyValues): void;
    private _cancelScript;
    private _runScript;
    private _callService;
    private _scriptDataChanged;
    private _canRun;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-script": MoreInfoScript;
    }
}
export {};
