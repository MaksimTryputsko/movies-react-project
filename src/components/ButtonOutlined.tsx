import Button from "@mui/material/Button"
import React, { ReactNode } from "react"

interface IButtonOutlinedProps {
  children: ReactNode
  onClick: () => void
}
const ButtonOutlined = ({ children, onClick }: IButtonOutlinedProps) => (
  <Button
    onClick={onClick}
    variant="outlined"
  >
    {children}
  </Button>
)

export { ButtonOutlined }
