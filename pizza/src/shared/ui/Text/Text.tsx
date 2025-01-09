import { memo } from 'react';

import classNames from 'classnames';

import { TextProps } from './Text.types';
import { SizeClass } from './Text.constants';
import styles from './Text.module.scss';

const Text = memo((props: TextProps) => {
  const {
    children,
    className,
    color = 'primary',
    align = 'center',
    size = 's',
    bold = false,
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
      className={classNames(styles.text, { [styles.bold]: bold }, additionalClasses)}>
      {children}
    </Tag>
  );
});

export default Text;

