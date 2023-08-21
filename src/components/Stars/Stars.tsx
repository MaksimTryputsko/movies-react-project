import StarsMUI from "@mui/material/Rating"
import React from "react"

interface IStar {
  rating: number
}

const Stars = ({ rating }: IStar) => (
  <StarsMUI
    name="read-only"
    readOnly
    size="large"
    value={rating}
  />
)

export { Stars }
