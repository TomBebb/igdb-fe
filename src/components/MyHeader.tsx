import { css } from "styles/css"
import { Link, useLocation } from "react-router-dom"
import { getMatchingRoute } from "~/routes.tsx"
import MyButton from "~/components/MyButton.tsx"

export interface MyHeaderProps {
  showMenu: boolean
  setShowMenu: (show: boolean) => void
}
export default function MyHeader({ showMenu, setShowMenu }: MyHeaderProps) {
  const location = useLocation()
  const route = getMatchingRoute(location.pathname)

  const name = route?.title ?? "???"

  function toggleMenu() {
    setShowMenu(!showMenu)
  }
  return (
    <header
      className={css({
        userSelect: "none",
        borderBottom: "lightgray 2px solid",
        flexDir: "row",
        fontSize: "2em",
        backgroundColor: "darkgray",
        color: "white",
        position: "sticky",
        top: 0,
        paddingX: "1vw",
        paddingY: "0.6vw",
        display: "flex",
        gap: "0.8vw",
      })}
    >
      <MyButton
        icon="mdi:menu"
        onClick={toggleMenu}
        className={css({
          display: "flex",
          lg: {
            display: "none",
          },
        })}
      />
      <Link to="/" className={css({ fontWeight: "bolder" })}>
        {" "}
        Games Database
      </Link>{" "}
      - {name}
    </header>
  )
}
