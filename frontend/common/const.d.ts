/** Constants to be used in the frontend. */
/** Icon to use when no icon specified for service. */
export declare const DEFAULT_SERVICE_ICON: string;
/** Icon to use when no icon specified for domain. */
export declare const DEFAULT_DOMAIN_ICON: string;
/** Icons for each domain */
export declare const FIXED_DOMAIN_ICONS: {
    air_quality: string;
    alert: string;
    automation: string;
    calendar: string;
    climate: string;
    configurator: string;
    conversation: string;
    counter: string;
    date: string;
    datetime: string;
    demo: string;
    device_tracker: string;
    google_assistant: string;
    group: string;
    homeassistant: string;
    homekit: string;
    image_processing: string;
    image: string;
    input_boolean: string;
    input_button: string;
    input_datetime: string;
    input_number: string;
    input_select: string;
    input_text: string;
    lawn_mower: string;
    light: string;
    mailbox: string;
    notify: string;
    number: string;
    persistent_notification: string;
    person: string;
    plant: string;
    proximity: string;
    remote: string;
    scene: string;
    schedule: string;
    script: string;
    select: string;
    sensor: string;
    simple_alarm: string;
    siren: string;
    stt: string;
    sun: string;
    text: string;
    time: string;
    timer: string;
    todo: string;
    tts: string;
    vacuum: string;
    wake_word: string;
    weather: string;
    zone: string;
};
export declare const FIXED_DEVICE_CLASS_ICONS: {
    apparent_power: string;
    aqi: string;
    atmospheric_pressure: string;
    carbon_dioxide: string;
    carbon_monoxide: string;
    current: string;
    data_rate: string;
    data_size: string;
    date: string;
    distance: string;
    duration: string;
    energy: string;
    frequency: string;
    gas: string;
    humidity: string;
    illuminance: string;
    irradiance: string;
    moisture: string;
    monetary: string;
    nitrogen_dioxide: string;
    nitrogen_monoxide: string;
    nitrous_oxide: string;
    ozone: string;
    ph: string;
    pm1: string;
    pm10: string;
    pm25: string;
    power: string;
    power_factor: string;
    precipitation: string;
    precipitation_intensity: string;
    pressure: string;
    reactive_power: string;
    shopping_List: string;
    signal_strength: string;
    sound_pressure: string;
    speed: string;
    sulphur_dioxide: string;
    temperature: string;
    timestamp: string;
    volatile_organic_compounds: string;
    volatile_organic_compounds_parts: string;
    voltage: string;
    volume: string;
    volume_flow_rate: string;
    water: string;
    weight: string;
    wind_speed: string;
};
/** Domains that have a state card. */
export declare const DOMAINS_WITH_CARD: string[];
export declare const SENSOR_ENTITIES: string[];
/** Domains that render an input element instead of a text value when displayed in a row.
 *  Those rows should then not show a cursor pointer when hovered (which would normally
 *  be the default) unless the element itself enforces it (e.g. a button). Also those elements
 *  should not act as a click target to open the more info dialog (the row name and state icon
 *  still do of course) as the click should instead e.g. activate the input field  or toggle
 *  the button that this row shows.
 */
export declare const DOMAINS_INPUT_ROW: string[];
/** States that we consider "off". */
export declare const STATES_OFF: string[];
/** Binary States */
export declare const BINARY_STATE_ON = "on";
export declare const BINARY_STATE_OFF = "off";
/** Domains where we allow toggle in Lovelace. */
export declare const DOMAINS_TOGGLE: Set<string>;
/** Domains that have a dynamic entity image / picture. */
export declare const DOMAINS_WITH_DYNAMIC_PICTURE: Set<string>;
/** Temperature units. */
export declare const UNIT_C = "\u00B0C";
export declare const UNIT_F = "\u00B0F";
/** Entity ID of the default view. */
export declare const DEFAULT_VIEW_ENTITY_ID = "group.default_view";
