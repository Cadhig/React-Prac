import React from "react"

export default function Button(props) {
    const [state, setState] = React.useState(0)

    return (
        <button onClick={() => setState(state + 1)}>{props.text} {state}</button>
    )
}