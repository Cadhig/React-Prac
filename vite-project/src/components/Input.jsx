import React from "react"

export default function Input() {
    const [state, setState] = React.useState("")
    console.log(state)
    console.log("Initialized")
    return (
        <input type="text" value={state.toUpperCase()} onChange={(event) => setState(event.target.value)} />
    )
}