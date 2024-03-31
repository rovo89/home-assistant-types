import "@material/mwc-button/mwc-button";
import "@material/mwc-linear-progress/mwc-linear-progress";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-checkbox";
import "../../../components/ha-circular-progress";
import "../../../components/ha-faded";
import "../../../components/ha-formfield";
import "../../../components/ha-markdown";
import { UpdateEntity } from "../../../data/update";
import type { HomeAssistant } from "../../../types";
declare class MoreInfoUpdate extends LitElement {
    hass: HomeAssistant;
    stateObj?: UpdateEntity;
    private _releaseNotes?;
    private _error?;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected firstUpdated(): void;
    get _shouldCreateBackup(): boolean | null;
    private _handleInstall;
    private _handleSkip;
    private _handleClearSkipped;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-update": MoreInfoUpdate;
    }
}
export {};
