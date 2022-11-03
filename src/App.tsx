import { lazy } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutDefault from "./layouts/LayoutDefault";

const Home = lazy(() => import('./pages/index'))

const route = createBrowserRouter([
  {
    path: '/',
    element: <LayoutDefault />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={route} />
  )
}

export default App