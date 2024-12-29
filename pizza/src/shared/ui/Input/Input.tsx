import classNames from "classnames";
import styles from "./Input.module.scss";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = (props: InputProps) => {

  const { className, ...rest} = props

  const inputClass = classNames(styles.input, className);

  return <input className={inputClass} {...rest} />;
};

export default Input;