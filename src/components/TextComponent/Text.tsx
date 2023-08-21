import classNames from "classnames"
import { ReactNode } from "react"

import styles from "./text.module.scss"

interface IPropsText {
  bold?: boolean
  children: ReactNode
  size: "S" | "M" | "L"
}
const Text = ({ children, size, bold }: IPropsText): JSX.Element => {
  const classes = classNames(
    { [styles.small]: size === "S" },
    { [styles.medium]: size === "M" },
    { [styles.large]: size === "L" },
    { [styles.bold]: bold === true },
  )
  return <span className={classes}>{children}</span>
}

export { Text }
