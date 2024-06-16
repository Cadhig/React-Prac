import React from "react"

export default function Toggle(props) {
    const [state, setState] = React.useState({ mode: 'light', className: 'lightMode' })
    return (
        <button state="light" onClick={() => {
            if (state.mode === "light") {
                setState({ mode: "dark", className: 'darkMode' })
            }
            else {
                setState({ mode: "light", className: 'lightMode' })
            }
        }} className={state.className}>{props.text} {state.mode}</button>
    )
}


