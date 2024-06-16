import React from "react"

export default function LoginButton() {

    const [loggedIn, setLogin] = React.useState(false)
    let buttonText = "Login"
    if (loggedIn === false) {
        buttonText = "Login"
    } else {
        buttonText = "Logout"
    }
    return (
        <button onClick={() => {
            if (loggedIn === false) {
                setLogin(true)
            } else {
                setLogin(false)
            }
        }} >{buttonText}</button>
    )
}