/* eslint-disable jsx-a11y/anchor-has-content */

import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ href, color, class_prefix, children }) => {
  return (
    <a
      href={href}
      className={
        class_prefix ? `${class_prefix}__link--${color}` : `link--${color}`
      }
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger']),
  class_prefix: PropTypes.string
};

Link.defaultProps = {
  color: 'primary',
  class_prefix: null
};

export default Link;
