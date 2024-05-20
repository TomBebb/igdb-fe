import { css } from "styles/css"
import { Link, useLocation } from "react-router-dom"
import { getMatchingRoute } from "~/routes.tsx"
export default function MyHeader() {
  const location = useLocation()
  const route = getMatchingRoute(location.pathname)

  const name = route?.title ?? "???"
  return (
    <header
      className={css({
        userSelect: "none",
        borderBottom: "lightgray 2px solid",
        flexDir: "column",
        fontSize: "2em",
        backgroundColor: "darkgray",
        color: "white",
        position: "sticky",
        top: 0,
        paddingX: "2vw",
      })}
    >
      <Link to="/" className={css({ fontWeight: "bolder" })}>
        {" "}
        Games Database
      </Link>{" "}
      - {name}
    </header>
  )
}
