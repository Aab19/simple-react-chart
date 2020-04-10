import React from "react"
import PropTypes from "prop-types"
import { ListHeaderStyle } from "./style"

function generateTabsHeader(value) {
  if (value && value.length !== 0) {
    return value.map((val, key) => {
      return <div key={key}>{val}</div>
    })
  }
}

export default function ListHeader(props) {
  return <ListHeaderStyle>{generateTabsHeader(props.tabs)}</ListHeaderStyle>
}

ListHeader.propTypes = {
  tabs: PropTypes.array.isRequired,
}
