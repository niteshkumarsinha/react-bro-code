import React from 'react'
import './Button.css'

function Button() {
    const styles = {
        padding: "1rem",
        borderRadius: "5px",
        backgroundColor: "hsla(245, 66%, 55%, 1.00)",
        color: "hsla(0, 74%, 21%, 1.00)",
        border: "none",
        cursor: "pointer"
    }
    return (
        <button style={styles}>Click Me</button>
    )
}

export default Button