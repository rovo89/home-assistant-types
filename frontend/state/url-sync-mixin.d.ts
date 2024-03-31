import { ReactiveElement } from "lit";
import { ProvideHassElement } from "../mixins/provide-hass-lit-mixin";
import { Constructor } from "../types";
export declare let historyPromise: Promise<void> | undefined;
export declare const urlSyncMixin: <T extends Constructor<ReactiveElement & ProvideHassElement>>(superClass: T) => T;
