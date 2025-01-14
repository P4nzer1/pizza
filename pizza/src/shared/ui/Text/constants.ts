import styles from './Text.module.scss';
import { TextSize } from './types';

export const SizeClass: Record<TextSize, string> = {
    xs: styles.xs,
    s: styles.s,
    m: styles.m,
    l: styles.l,
    xl: styles.xl
};
