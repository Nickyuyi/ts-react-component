import React, { useState } from 'react';
import classNames from 'classnames';

type AlertType = 'success' | 'default' | 'danger' | 'warning';

interface AlertProps {
  className?: string,
  title: string,
  type?: AlertType,
  description?: string,
  closable?: boolean,
  onClose?: () => void
}

const Alert: React.FC<AlertProps> = props => {
  const [hide, setHide] = useState(false);

  const {
    className,
    title,
    type,
    description,
    closable,
    onClose
  } = props;

  // TODO hide后如何隐藏盒子的问题？
  const classes = classNames('alert', className, {
    [`alert-${type}`]: type,
    hide
  });

  const handleClick = () => {
    setHide(true);
    onClose && onClose();
  }

  return (
    <div className={classes}>
      <div className="alert-title">{title}</div>
      { closable && <span className="alert-close" onClick={handleClick}>
        x</span> }
      { description && <div className="alert-desc">{description}</div> }
    </div>
  );
}

Alert.defaultProps = {
  type: 'default',
  closable: true
}

export default Alert;