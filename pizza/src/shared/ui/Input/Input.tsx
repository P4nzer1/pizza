import classNames from "classnames";
import styles from "./Input.module.scss";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;  
}

const Input = ({ className, id, ...props }: InputProps) => {
  const inputClass = classNames(styles.input, className);

  return (
    <div className={styles.input}>
      <input id={id} className={inputClass} {...props} />
    </div>
  );
};

export default Input;