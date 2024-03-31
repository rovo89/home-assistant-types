import "element-internals-polyfill";
import { MdCircularProgress } from "@material/web/progress/circular-progress";
import { CSSResult, PropertyValues } from "lit";
export declare class HaCircularProgress extends MdCircularProgress {
    ariaLabel: string;
    size: "tiny" | "small" | "medium" | "large";
    protected updated(changedProps: PropertyValues): void;
    static get styles(): CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-circular-progress": HaCircularProgress;
    }
}
