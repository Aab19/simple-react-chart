import React from 'react';
import PropTypes from 'prop-types';

export default function Image(props) {
  return <img className={props.className} src={props.src} alt={props.alt} />;
}

Image.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};
