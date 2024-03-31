import "@material/mwc-button/mwc-button";
import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import "../../hassio/src/components/hassio-upload-backup";
import type { LocalizeFunc } from "../common/translations/localize";
import "../components/ha-ansi-to-html";
import "../components/ha-card";
import { HomeAssistant } from "../types";
import "./onboarding-loading";
declare class OnboardingRestoreBackup extends LitElement {
    hass: HomeAssistant;
    localize: LocalizeFunc;
    language: string;
    _restoring: boolean;
    protected render(): TemplateResult;
    private _back;
    private _backupUploaded;
    protected firstUpdated(changedProps: any): void;
    private _checkRestoreStatus;
    private _showBackupDialog;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "onboarding-restore-backup": OnboardingRestoreBackup;
    }
}
export {};
