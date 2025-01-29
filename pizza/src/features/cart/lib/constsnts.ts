import { CartState, variantStep } from "./types";
export const initialState: CartState = {
    error: null,
    isLoading: false,
    clean:false,
    items: [],
    step: 'empty',
}