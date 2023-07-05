import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    small = false,
    large = false,
    rounded = false,
    text = false,
    disabled = false,
    leftIcon = false,
    rightIcon = false,
    onClick,
    children,
    ...passProp
}) {
    let Comp = 'button';
    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        rounded,
        text,
        disabled,
        leftIcon,
        rightIcon,
    });
    const props = {
        onClick,
        ...passProp,
    };
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        props.to = to;
        Comp = Link;
    }
    if (href) {
        props.href = href;
        Comp = 'a';
    }
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
        </Comp>
    );
}

export default Button;
