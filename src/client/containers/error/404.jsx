import React from "react"
import PropTypes from "prop-types"

export default function NotFound(props) {
  return <div>{props.title}</div>
}

NotFound.propTypes = {
  title: PropTypes.string.isRequired,
}
