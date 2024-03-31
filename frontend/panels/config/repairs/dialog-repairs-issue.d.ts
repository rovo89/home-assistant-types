import "@material/mwc-button/mwc-button";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-markdown";
import type { HomeAssistant } from "../../../types";
import type { RepairsIssueDialogParams } from "./show-repair-issue-dialog";
declare class DialogRepairsIssue extends LitElement {
    hass: HomeAssistant;
    private _issue?;
    private _params?;
    showDialog(params: RepairsIssueDialogParams): void;
    closeDialog(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _ignoreIssue;
    private _clickHandler;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-repairs-issue": DialogRepairsIssue;
    }
}
export {};
