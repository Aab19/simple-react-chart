import React from "react"
import PropTypes from "prop-types"

export default function H2(props) {
  return <h2 className={props.className ? props.classname : ""} {...props} />
}

H2.propTypes = {
  className: PropTypes.string,
}
