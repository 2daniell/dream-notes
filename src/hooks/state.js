import { RenderDOM } from "./render";

let states = {};

export function memoryState(initialState) {
    const key = Symbol();
    states[key] = states[key] || initialState;

    const get = () => states[key];

    const set = (updateFn) => {
        if (typeof updateFn === "function") {
            states[key] = updateFn(get());
        } else {
            states[key] = updateFn;
        }

        RenderDOM();
        
    };

    return [get, set];
}
