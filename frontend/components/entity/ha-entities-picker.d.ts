import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../types";
import "./ha-entity-picker";
import type { HaEntityPickerEntityFilterFunc } from "./ha-entity-picker";
declare class HaEntitiesPickerLight extends LitElement {
    hass?: HomeAssistant;
    value?: string[];
    disabled: boolean;
    required: boolean;
    helper?: string;
    /**
     * Show entities from specific domains.
     * @type {string}
     * @attr include-domains
     */
    includeDomains?: string[];
    /**
     * Show no entities of these domains.
     * @type {Array}
     * @attr exclude-domains
     */
    excludeDomains?: string[];
    /**
     * Show only entities of these device classes.
     * @type {Array}
     * @attr include-device-classes
     */
    includeDeviceClasses?: string[];
    /**
     * Show only entities with these unit of measuments.
     * @type {Array}
     * @attr include-unit-of-measurement
     */
    includeUnitOfMeasurement?: string[];
    /**
     * List of allowed entities to show. Will ignore all other filters.
     * @type {Array}
     * @attr include-entities
     */
    includeEntities?: string[];
    /**
     * List of entities to be excluded.
     * @type {Array}
     * @attr exclude-entities
     */
    excludeEntities?: string[];
    pickedEntityLabel?: string;
    pickEntityLabel?: string;
    entityFilter?: HaEntityPickerEntityFilterFunc;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _getEntityFilter;
    private get _currentEntities();
    private _updateEntities;
    private _entityChanged;
    private _addEntity;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-entities-picker": HaEntitiesPickerLight;
    }
}
export {};
