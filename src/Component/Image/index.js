import image from '~/assets/images';
import { forwardRef, useState } from 'react';
import classNames from 'classnames';
import styles from './Image.module.scss';

function Image({ className, fallBack: customFallBack = image.noimge, src, alt, ...props }, ref) {
    const [fallBack, setFallback] = useState(src);
    const handleError = () => {
        return setFallback(customFallBack);
    };
    return (
        <img
            className={classNames(styles.wrapper, className)}
            src={fallBack}
            ref={ref}
            alt={alt}
            {...props}
            onError={handleError}
        ></img>
    );
}

export default forwardRef(Image);
