import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    pimary = false,
    outline = false,
    text = false,
    disabled,
    rounded,
    small = false,
    large = false,
    children,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...passProp
}) {
    let Comp = 'button';
    const _prop = {
        onClick,
        ...passProp,
    };

    if (disabled) {
        delete _prop.onClick;
    }

    if (to) {
        _prop.to = to;
        Comp = Link;
    } else if (href) {
        _prop.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        pimary,
        outline,
        text,
        disabled,
        rounded,
        small,
        large,
    });
    return (
        <Comp className={classes} {..._prop}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
