import { ButtonHTMLAttributes } from "react";
import classNames from "classnames";

import CloseIcon from "@/shared/svg/CloseIcon";
import styles from "./Button.module.scss";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
    variant?: 'base' | 'close';
}

const Button = (props: ButtonProps) => {
    const { className, text, variant = 'base', ...rest } = props

    const buttonClass = classNames(styles.button, styles[variant], className);

    const content = { base:text, close:<CloseIcon/>}

    return (
        <button className={buttonClass} {...rest}>
            {content[variant]}
        </button>
    );
};

export default Button;