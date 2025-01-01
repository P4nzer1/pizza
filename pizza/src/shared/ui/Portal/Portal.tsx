import { HTMLAttributes } from "react";
import { createPortal } from 'react-dom';

interface PortalProps extends HTMLAttributes<HTMLElement>  {
    element?: HTMLElement;
}

const Portal = ({ children, element }: PortalProps) => {

    const container = element || document.getElementById('root');

    if (!container) {
        console.error(`Container with ID "${container}" not found.`);
        return null;
    }

    return createPortal(children, container);
};

export default Portal;
