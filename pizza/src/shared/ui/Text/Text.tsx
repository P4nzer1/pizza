import classNames from 'classnames';

import { TextProps } from './types';
import { SizeClass } from './constants';
import styles from './Text.module.scss';

const Text = (props: TextProps) => {
  const {
    children,
    className,
    color = 'primary',
    align = 'center',
    size = 's',
    bold = '400',
    as: Tag = 'p'
  } = props;

  const additionalClasses = [
    SizeClass[size],
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

export default Text;

