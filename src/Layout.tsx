import { Outlet, useLocation } from "react-router-dom"
import MyHeader from "./components/MyHeader.tsx"
import MyNav from "~/components/MyNav.tsx"
import { css } from "styles/css"

export default function Layout(): JSX.Element {
  const path = useLocation()
  return (
    <div>
      <MyHeader />
      <div
        className={css({
          width: "20vw",
          height: "100%",
          borderRight: "2px solid gray",
          position: "fixed",
          backgroundColor: "antiquewhite",
        })}
      >
        <MyNav />
      </div>
      <h1>Hello World: {path.pathname}</h1>
      <Outlet />
    </div>
  )
}
