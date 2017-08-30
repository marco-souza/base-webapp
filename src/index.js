/**
 * Main file
 *
 * @flow
 */
import { createMountPoint } from "./app/commons/utils"
import React from "react"
import { render } from "react-dom"

(() => {
    // First off all, create a app element
    createMountPoint("app")

    // Define routes component
    const routes = <div>hellor</div>

    // Start ReactJS
    render(routes, document.getElementById("app"))
})()
