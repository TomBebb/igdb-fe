import { NonIndexRouteObject } from "react-router-dom"
import Homepage from "~/views/Homepage.tsx"
export interface MyRoute extends NonIndexRouteObject {
  title: string
}
export const routes: MyRoute[] = [
  {
    path: "/",
    element: <Homepage />,
    title: "Homepage",
  },
  {
    title: "Game By ID",
    path: "/games/by-id/:id",
    loader: ({ params }) => {
      return Number(params.id)
    },
    element: <div>Game By ID</div>,
  },
]

export function isRouteMatching(routePath: string, path: string): boolean {
  return routePath === "/"
    ? path === "/"
    : path.startsWith(routePath.split(":")[0])
}
export function getMatchingRoute(path: string): MyRoute | undefined {
  return routes.find((route) => isRouteMatching(route.path!, path))
}
