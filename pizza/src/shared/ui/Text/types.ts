import { ReactNode } from 'react';

export type TextColor = 'primary' | 'accent' | 'grey' | 'orange';

export type TextAlign = 'center' | 'right' | 'left';

export type TextSize = 'xs'| 's' | 'm' | 'l' | 'xl';

export type HeaderTagType = 'p' | 'h3' | 'h2' | 'h1' | 'span';

export interface TextProps {
    children?: ReactNode;
    bold?: boolean;
    className?: string;
    color?: TextColor;
    align?: TextAlign;
    size?: TextSize;
    as?: HeaderTagType;
}
