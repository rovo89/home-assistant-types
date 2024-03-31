import { Snackbar } from "@material/mwc-snackbar/mwc-snackbar";
export declare class HaToast extends Snackbar {
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-toast": HaToast;
    }
}
