import "element-internals-polyfill";
import { MdFilterChip } from "@material/web/chips/filter-chip";
export declare class HaFilterChip extends MdFilterChip {
    noLeadingIcon: boolean;
    static styles: import("lit").CSSResult[];
    protected renderLeadingIcon(): import("lit-html").TemplateResult<2 | 1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-filter-chip": HaFilterChip;
    }
}
