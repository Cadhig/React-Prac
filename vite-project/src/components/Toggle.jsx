import React from "react"

export default function Toggle(props) {
    const [state, setState] = React.useState("light")
    return (
        <button state="light" onClick={() => {
            if (state === "light") {
                setState("dark")
            }
            else {
                setState("light")
            }
        }}>{props.text} {state}</button>
    )
}


