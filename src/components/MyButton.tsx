import { css } from "styles/css"
import { Icon } from "@iconify/react"
import { Link } from "react-router-dom"

export interface MyButtonProps {
  children?: JSX.Element | string
  icon?: string
  to?: string
  onClick?: () => void
  className?: string
}
export default function MyButton({
  children,
  icon,
  to,
  onClick,
  className = "",
}: MyButtonProps) {
  const inner = (
    <button
      className={
        css({
          flexDir: "row",
          display: "flex",
          alignItems: "center",
          fontSize: "1.1em",
          paddingX: "1em",
          paddingY: "0.2em",
          outline: "1.5px solid ",
          borderRadius: "0.12em",
          gap: "0.7em",

          color: "black",
          backgroundColor: "lightgrey",
          cursor: "pointer",

          transition: "all",
          _hover: {
            backgroundColor: "white",
            borderColor: "gray",
          },
        }) + className
      }
      onClick={onClick}
    >
      {icon && <Icon icon={icon} />}
      {children && <div className={css({ flex: 1 })}>{children}</div>}
    </button>
  )
  return to ? <Link to={to}>{inner}</Link> : inner
}
