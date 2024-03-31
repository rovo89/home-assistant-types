import "@material/mwc-button/mwc-button";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../components/ha-dialog";
import "../../../components/ha-formfield";
import "../../../components/ha-radio";
import { HomeAssistant } from "../../../types";
import type { DialogStatisticsUnitsChangedParams } from "./show-dialog-statistics-fix-units-changed";
export declare class DialogStatisticsFixUnitsChanged extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _action?;
    showDialog(params: DialogStatisticsUnitsChangedParams): void;
    closeDialog(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleActionChanged;
    private _fixIssue;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-statistics-fix-units-changed": DialogStatisticsFixUnitsChanged;
    }
}
