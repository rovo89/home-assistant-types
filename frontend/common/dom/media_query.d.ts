/**
 * Attach a media query. Listener is called right away and when it matches.
 * @param mediaQuery media query to match.
 * @param listener listener to call when media query changes between match/unmatch
 * @returns function to remove the listener.
 */
export declare const listenMediaQuery: (mediaQuery: string, matchesChanged: (matches: boolean) => void) => () => void;
