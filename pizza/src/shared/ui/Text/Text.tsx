import { memo } from 'react';
import { ReactNode} from 'react'
import classNames from 'classnames';
import styles from './Text.module.scss'; 

type TextStyle = 'primary' | 'error' | 'accent';
type TextAlign = 'left' | 'right' | 'center';
type TextSize = 's' | 'm' | 'l' ;
type HeaderTagType = 'h1' | 'h2' | 'h3' | 'p' | 'span';

interface TextProps {
  children?: ReactNode; 
  className?: string; 
  style?: TextStyle; 
  align?: TextAlign; 
  size?: TextSize; 
  bold?: boolean; 
  as?: HeaderTagType; 
  color?: string; 
}

const SizeToClass: Record<TextSize, string> = {
  s: styles.sizeS,
  m: styles.sizeM,
  l: styles.sizeL,
};

const Text = memo(({
  children,
  className,
  style = 'primary',
  align = 'left',
  size = 'm',
  bold = false,
  as: Tag = 'p',
  color,
}: TextProps) => {
  const sizeClass = SizeToClass[size];

  const additionalClasses = [
    styles[style], 
    styles[align],   
    sizeClass, 
    className,   
  ];

  return (
    <Tag
      className={classNames(styles.Text, { [styles.bold]: bold }, additionalClasses)}
      style={{ color }}
    >
      {children}
    </Tag>
  );
});

export default Text;

