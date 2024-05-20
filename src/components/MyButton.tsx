import { css } from "styles/css"
import { Icon } from "@iconify/react"
import { Link } from "react-router-dom"

export interface MyButtonProps {
  children: JSX.Element | string
  icon?: string
  to?: string
}
export default function MyButton({ children, icon, to }: MyButtonProps) {
  const inner = (
    <button
      className={css({
        flexDir: "row",
        display: "flex",
        alignItems: "center",
        fontSize: "1.1em",
        paddingX: "1em",
        paddingY: "0.2em",
        outline: "1.5px solid ",
        borderRadius: "0.12em",
        gap: "0.7em",

        backgroundColor: "lightgrey",
        cursor: "pointer",

        transition: "all",
        _hover: {
          backgroundColor: "white",
          borderColor: "gray",
        },
      })}
    >
      {icon && <Icon icon={icon} />}
      {children}
    </button>
  )
  return to ? <Link to={to}>{inner}</Link> : inner
}
