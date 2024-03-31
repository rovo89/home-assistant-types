import { PropertyDeclaration } from "lit";
/**
 * Transform function type.
 */
export interface Transformer<T = any, V = any> {
    (value: V): T;
}
/**
 * Specifies an tranformer callback that is run when the value of the decorated property, or any of the properties in the watching array, changes.
 * The result of the tranformer is assigned to the decorated property.
 * The tranformer receives the current as arguments.
 */
export declare const transform: <T, V>(config: {
    transformer: Transformer<T, V>;
    watch?: PropertyKey[];
    propertyOptions?: PropertyDeclaration;
}) => any;
