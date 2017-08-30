/**
 * Main file
 *
 * @flow
 */
import { createMountPoint } from "./app/commons/utils"
import { render } from "react-dom"
import React from "react"
import App from "./app"

(divId => {
    // First off all, create a app element
    createMountPoint(divId)

    // Define routes component
    const routes = (
        <App>
            <div>Oq?</div>
        </App>
    )

    // Start ReactJS
    render(routes, document.getElementById(divId))
})("app")
