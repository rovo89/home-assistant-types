import "../resources/compatibility";
import "../resources/safari-14-attachshadow-patch";
declare global {
    interface Window {
        loadES5Adapter: () => Promise<unknown>;
    }
}
