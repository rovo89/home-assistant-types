import { Auth, Connection } from "home-assistant-js-websocket";
import "../resources/array.flat.polyfill";
import "../resources/safari-14-attachshadow-patch";
declare global {
    interface Window {
        hassConnection: Promise<{
            auth: Auth;
            conn: Connection;
        }>;
        hassConnectionReady?: (hassConnection: Window["hassConnection"]) => void;
    }
}
