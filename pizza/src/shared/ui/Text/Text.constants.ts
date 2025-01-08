import styles from './Text.module.scss';
import { TextSize } from './Text.types';

export const SizeClass: Record<TextSize, string> = {
    s: styles.sizeS,
    m: styles.sizeM,
    l: styles.sizeL,
};
