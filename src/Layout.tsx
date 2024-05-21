import { Outlet, useLocation } from "react-router-dom"
import MyHeader from "./components/MyHeader.tsx"
import MyNav from "~/components/MyNav.tsx"
import { css } from "styles/css"
import { useState } from "react"

export default function Layout(): JSX.Element {
  const path = useLocation()
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div>
      <MyHeader showMenu={showMenu} setShowMenu={setShowMenu} />
      <div
        className={css({
          height: "100%",
          borderRight: "2px solid gray",
          position: "fixed",
          backgroundColor: "antiquewhite",
          width: "100%",
          lg: {
            width: "20vw",
          },
        })}
      >
        <MyNav
          className={css(
            showMenu
              ? { display: "flex", alignItems: "center" }
              : { display: "none" }
          )}
        />
      </div>
      <h1>Hello World: {path.pathname}</h1>
      <Outlet />
    </div>
  )
}
