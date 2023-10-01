import InputMUI from "@mui/material/TextField"
import React from "react"

interface IInput {
  onChangeText: (value: string) => void
  onClick: () => void
  type: "outlined" | "filled" | "standard"
  value: string
}

const Input = ({ value, type, onChangeText, onClick }: IInput) => {
  const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const getText = e.target.value
    onChangeText(getText)
  }
  return (
    <InputMUI
      label="Search film"
      onChange={onChangeHandle}
      onClick={onClick}
      sx={{ width: "300px" }}
      value={value}
      variant={type}
    />
  )
}

export { Input }
