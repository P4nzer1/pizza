import classNames from 'classnames';

import { TextProps } from './types';
import { SizeClass, SizeWeigh } from './constants';
import styles from './Text.module.scss';

export const Text = (props: TextProps) => {
  const {
    children,
    className,
    color = 'primary',
    align = 'center',
    size = 's',
    weigh = '400',
    as: Tag = 'p'
  } = props;

  const additionalClasses = [
    SizeClass[size],
    SizeWeigh[weigh],
    styles[color],
    styles[align],
    className,
  ];

  return (
    <Tag
      className={classNames(styles.text, additionalClasses)}>
      {children}
    </Tag>
  );
};

