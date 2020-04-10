import React from "react"
import PropTypes from "prop-types"
import TableStyle from "./style"

function generateTable(value) {
  if (value && value.length !== 0) {
    return (
      <table className="table">
        <thead>
          <tr>
            {value.tabHeader.map((val, key) => {
              return <th key={key}>{val}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {value.tabList.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.countryRegion}</td>
                <td>{val.recovered}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
  return
}

export default function Table(props) {
  return <TableStyle>{generateTable(props)}</TableStyle>
}

Table.propTypes = {
  tabHeader: PropTypes.array.isRequired,
  tabList: PropTypes.array.isRequired,
}
