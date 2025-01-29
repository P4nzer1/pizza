import { ItemState } from "@/entities/product/lib/types";

export type variantStep = 'empty' | 'full'
export interface CartState {
    error: string | null;
    isLoading: boolean;
    clean: boolean;
    items: ItemState[];
    step: variantStep;
}