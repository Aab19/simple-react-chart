import RootLayout from "../layout/Root"
import loadable from "@loadable/component"

// components
import Home from "../containers/home/index"
import NotFound from "../containers/error/404"

export default [
  {
    component: RootLayout,
    routes: [
      {
        path: "/",
        exact: true,
        component: Home,
      },
      {
        path: "*",
        exact: true,
        component: NotFound,
      },
    ],
  },
]
