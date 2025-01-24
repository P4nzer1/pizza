import { ButtonHTMLAttributes, ReactNode } from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
    variant?: 'base' | 'icon';
    icon?: ReactNode;
}

export const Button = (props: ButtonProps) => {
    const { className, text, variant = 'base', icon, ...rest } = props

    const buttonClass = classNames(styles.button, styles[variant], className);

    const content = { base:text, icon:icon};

    return (
        <button className={buttonClass} {...rest}>
            {content[variant]}
        </button>
    );
};