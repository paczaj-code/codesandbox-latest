import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ src, alt, size, class_prefix }) => {
  return (
    <div>
      <img
        src={src}
        alt={alt}
        className={
          class_prefix ? `${class_prefix}__image--${size}` : `image--${size}`
        }
      />
    </div>
  );
};

Image.propTypes = {
  Tasrcg: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'big']),
  class_prefix: PropTypes.string
};

Image.defaultProps = {
  class_prefix: null,
  size: 'medium'
};

export default Image;
