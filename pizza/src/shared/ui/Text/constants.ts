import styles from './Text.module.scss';
import { TextSize, TextWeigh } from './types';

export const SizeClass: Record<TextSize, string> = {
    xs: styles.xs,
    s: styles.s,
    m: styles.m,
    l: styles.l,
    xl: styles.xl
};

export const SizeWeigh: Record<TextWeigh, string> = {
    '300': styles.weight300,
    '400': styles.weight400,
    '500': styles.weight500,
    '700': styles.weight700,
};

