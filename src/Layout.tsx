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
          className={css({
            position: "fixed",
            top: "5vh",
            width: "100%",
            paddingX: "2vw",
            left: showMenu ? 0 : "-100vw",
            lg: { position: "relative", left: 0, paddingX: 0, top: 0 },
            transition: "all 0.3s ease",
          })}
        />
      </div>
      <h1>Hello World: {path.pathname}</h1>
      <Outlet />
    </div>
  )
}
