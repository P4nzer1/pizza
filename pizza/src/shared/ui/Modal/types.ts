import { HTMLAttributes } from "react";

export type ModalAlign = "center" | "right" | "left";
export type ModalColor = "white" | "black" | "grey";

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
    isOpen: boolean;
    onClose: () => void;
    height?: number | string;
    width?: number | string;
    color?: ModalColor;
    align?: ModalAlign;
}