import { css } from "styles/css"
import { isRouteMatching, routes } from "~/routes.tsx"
import { Link, useLocation } from "react-router-dom"

export default function MyNav() {
  const location = useLocation()
  return (
    <div
      className={css({
        display: "flex",
        flexDir: "column",
        alignItems: "center",
        justifyItems: "center",
        fontSize: "2em",
        gap: "0.2vh",
      })}
    >
      {routes.map((route) => (
        <Link
          to={route.path!}
          className={css({
            border: "2px white solid",
            backgroundColor: "white",
            width: "100%",
            textAlign: "center",
            fontWeight: isRouteMatching(route.path!, location.pathname)
              ? "semibold"
              : "normal",
          })}
        >
          {route.title}
        </Link>
      ))}
    </div>
  )
}
