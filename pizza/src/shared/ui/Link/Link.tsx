import { AnchorHTMLAttributes, ReactNode } from "react"
import classNames from "classnames";

import styles from './Link.module.scss'

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    children: ReactNode;
    className?: string;
    color?: 'white' | 'black' | 'orange';
}

export const Link = (props: LinkProps) => {
    const { children, color='orange', className, ...rest } = props;
    const linkClass = classNames(styles.link, styles[color], className);

    return (
        <a className={linkClass} {...rest}>
            {children}
        </a>
    );
};