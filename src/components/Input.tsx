import InputMUI from "@mui/material/TextField"
import React from "react"

interface IInput {
  setValue: (value: string) => void
  type: "outlined" | "filled" | "standard"
  value: string
}

const Input = ({ value, setValue, type }: IInput) => (
  <InputMUI
    label="Search film"
    onChange={(e) => setValue(e.target.value)}
    sx={{ width: "300px" }}
    value={value}
    variant={type}
  />
)

export { Input }
