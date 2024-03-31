import type { PaperTabElement } from "@polymer/paper-tabs/paper-tab";
import "@polymer/paper-tabs/paper-tabs";
import type { PaperTabsElement } from "@polymer/paper-tabs/paper-tabs";
import { Constructor } from "../types";
declare const PaperTabs: Constructor<PaperTabsElement>;
export declare class HaTabs extends PaperTabs {
    private _firstTabWidth;
    private _lastTabWidth;
    private _lastLeftHiddenState;
    static get template(): HTMLTemplateElement;
    _tabChanged(tab: PaperTabElement, old: PaperTabElement): void;
    /**
     * Modify _affectScroll so that when the scroll arrows appear
     * while scrolling and the tab container shrinks we can counteract
     * the jump in tab position so that the scroll still appears smooth.
     */
    _affectScroll(dx: number): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-tabs": HaTabs;
    }
}
export {};
