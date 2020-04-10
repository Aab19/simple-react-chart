import React, { Component } from "react"
import { renderRoutes } from "react-router-config"

class RootLayout extends Component {
  render() {
    return (
      <div className="main">
        <div className="container">{renderRoutes(this.props.route.routes)}</div>
      </div>
    )
  }
}

export default RootLayout
