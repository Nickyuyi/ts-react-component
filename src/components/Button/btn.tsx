import React from 'react';
import classNames from 'classnames';

type ButtonType = 'primary' | 'danger' | 'default' | 'link';
type ButtonSize = 'lg' | 'sm';

interface BaseProps {
  btnType?: ButtonType,
  size?: ButtonSize,
  className?: string,
  disabled?: boolean,
  href?: string
}

type NativeButtonProps = BaseProps & React.ButtonHTMLAttributes<HTMLElement>;
type AnchorBtuuonProps = BaseProps & React.AnchorHTMLAttributes<HTMLElement>;
type ButtonProps = Partial<NativeButtonProps & AnchorBtuuonProps>;

const Button: React.FC<ButtonProps> = props => {
  const {
    btnType,
    size,
    className,
    disabled,
    href,
    children,
    ...restProps
  } = props;

  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: (btnType === 'link' && disabled)
  });

  if (btnType === 'link' && href) {
    return <a className={classes} href={href} {...restProps}>{children}</a>
  } else {
    return <button className={classes} disabled={disabled} {...restProps}>{children}</button>
  }
}

Button.defaultProps = {
  disabled: false,
  btnType: 'default'
}

export default Button;