import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, color, type, size, variant, class_prefix }) => {
  return (
    <button
      type={type}
      className={
        !class_prefix
          ? `badge--${variant}--${size}--${color}`
          : `${class_prefix}__badge--${variant}--${size}--${color}`
      }
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['regular', 'outline', 'text', 'icon']),
  size: PropTypes.oneOf(['small', 'medium', 'big']),
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger']),
  class_prefix: PropTypes.string
};

Button.defaultProps = {
  variant: 'regular',
  size: 'medium',
  color: 'primary',
  class_prefix: null
};

export default Button;

// TODO add proptypes
