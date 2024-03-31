import { HASSDomEvent, ValidHassDomEvent } from "../common/dom/fire_event";
import { ProvideHassElement } from "../mixins/provide-hass-lit-mixin";
declare global {
    interface HASSDomEvents {
        "show-dialog": ShowDialogParams<unknown>;
        "close-dialog": undefined;
        "dialog-closed": DialogClosedParams;
    }
    interface HTMLElementEventMap {
        "show-dialog": HASSDomEvent<ShowDialogParams<unknown>>;
        "dialog-closed": HASSDomEvent<DialogClosedParams>;
    }
}
export interface HassDialog<T = HASSDomEvents[ValidHassDomEvent]> extends HTMLElement {
    showDialog(params: T): any;
    closeDialog?: () => boolean | void;
}
interface ShowDialogParams<T> {
    dialogTag: keyof HTMLElementTagNameMap;
    dialogImport: () => Promise<unknown>;
    dialogParams: T;
    addHistory?: boolean;
}
export interface DialogClosedParams {
    dialog: string;
}
export interface DialogState {
    dialog: string;
    open: boolean;
    oldState: null | DialogState;
    dialogParams?: unknown;
}
export declare const FOCUS_TARGET: unique symbol;
export declare const showDialog: (element: HTMLElement & ProvideHassElement, root: ShadowRoot | HTMLElement, dialogTag: string, dialogParams: unknown, dialogImport?: () => Promise<unknown>, addHistory?: boolean) => Promise<boolean>;
export declare const replaceDialog: (dialogElement: HassDialog) => void;
export declare const closeDialog: (dialogTag: string) => Promise<boolean>;
export declare const makeDialogManager: (element: HTMLElement & ProvideHassElement, root: ShadowRoot | HTMLElement) => void;
export {};
