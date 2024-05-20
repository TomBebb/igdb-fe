import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { routes } from "./routes.tsx"
import Layout from "./Layout.tsx"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: routes,
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
