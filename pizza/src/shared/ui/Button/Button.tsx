import classNames from "classnames";
import styles from "./Button.module.scss";
import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
}

const Button = ({ text, className, ...props }: ButtonProps) => {
    const buttonClass = classNames(styles.button, className);
    return (
        <button
            className={buttonClass}
            {...props}
        >
            {text}
        </button>
    );
};

export default Button;