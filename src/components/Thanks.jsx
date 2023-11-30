/* eslint-disable react/prop-types */
import { useEffect } from "react"

const Thanks = ({ submit }) => {
  useEffect(() => submit, []);

  return (
    <div style={{ 
      height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" 
    }}>
      Muchas gracias :)
    </div>
  )
}

export default Thanks