import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { renderRoutes } from "react-router-config"
import routes from "./routes"
import { Provider } from "react-redux"
import store from "../config/store"

const App = () => (
  <BrowserRouter>
    <Provider store={store}>{renderRoutes(routes)}</Provider>
  </BrowserRouter>
)

ReactDOM.hydrate(<App />, document.getElementById("app"))
