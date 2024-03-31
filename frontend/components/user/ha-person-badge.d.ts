import { CSSResultGroup, LitElement, nothing } from "lit";
import { BasePerson } from "../../data/person";
declare class PersonBadge extends LitElement {
    person?: BasePerson;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-person-badge": PersonBadge;
    }
}
export {};
