import classNames from "classnames";

import styles from "./Input.module.scss";

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  onChange: (value: string) => void;
  className?: string;
}

const Input = (props: InputProps) => {
  const hendleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  const {onChange, className, ...rest} = props

  const inputClass = classNames(styles.input, className);

  return <input className={inputClass} onChange={hendleChange} {...rest} />;
};

export default Input;