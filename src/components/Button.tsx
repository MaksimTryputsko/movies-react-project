import ButtonMUI from "@mui/material/Button"
import React, { ReactNode } from "react"

interface IButtonOutlinedProps {
  children: ReactNode
  onClick: () => void
  type: "outlined" | "text" | "contained"
}
const Button = ({ children, onClick, type }: IButtonOutlinedProps) => (
  <ButtonMUI
    onClick={onClick}
    variant={type}
  >
    {children}
  </ButtonMUI>
)

export { Button }
