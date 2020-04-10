import React from "react"
import PropTypes from "prop-types"
import HeaderStyle from "./style"
import H2 from "../H2/index"

export default function Header(props) {
  return (
    <HeaderStyle>
      <div className="header-title">{props.title}</div>
      <H2 className="header-number">{props.number}</H2>
    </HeaderStyle>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
}
