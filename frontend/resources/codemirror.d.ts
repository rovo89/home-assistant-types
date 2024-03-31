import { StreamLanguage } from "@codemirror/language";
import { Compartment } from "@codemirror/state";
import { KeyBinding } from "@codemirror/view";
export { autocompletion } from "@codemirror/autocomplete";
export { defaultKeymap, history, historyKeymap } from "@codemirror/commands";
export { highlightingFor } from "@codemirror/language";
export { highlightSelectionMatches, searchKeymap } from "@codemirror/search";
export { EditorState } from "@codemirror/state";
export { crosshairCursor, drawSelection, EditorView, highlightActiveLine, keymap, lineNumbers, rectangularSelection, } from "@codemirror/view";
export { tags } from "@lezer/highlight";
export declare const langs: {
    jinja2: StreamLanguage<unknown>;
    yaml: StreamLanguage<unknown>;
};
export declare const langCompartment: Compartment;
export declare const readonlyCompartment: Compartment;
export declare const tabKeyBindings: KeyBinding[];
export declare const haTheme: import("@codemirror/state").Extension;
export declare const haSyntaxHighlighting: import("@codemirror/state").Extension;
