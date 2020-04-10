import React from "react"
import PropTypes from "prop-types"
import ListStyle from "./style"

function generateListContent(value) {
  if (value && value.length !== 0) {
    return value.map((val, key) => {
      return (
        <li key={key}>
          <div className="pages">{val.countryRegion}</div>
          <div className="users">{val.recovered}</div>
        </li>
      )
    })
  }
}

export default function List(props) {
  return (
    <React.Fragment>
      <ListStyle>
        <ul>{generateListContent(props.content)}</ul>
      </ListStyle>
    </React.Fragment>
  )
}

List.propTypes = {
  content: PropTypes.array.isRequired,
}
