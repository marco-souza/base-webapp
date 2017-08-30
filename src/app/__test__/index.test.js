import React from "react"
import { shallow, mount, render } from "enzyme"
import "jest-enzyme"
import App from "../index"

describe("Test App Component", () => {
    it("Test with children element", () => {
        const innerContent = <div className="test">Test</div>,
            app = <App>{innerContent}</App>

        expect(shallow(app).contains(innerContent)).toBe(true)
    })

    it("Test with children text", () => {
        const innerContent = "masoq?",
            app = <App>{innerContent}</App>

        expect(shallow(app).contains(innerContent)).toBe(true)
    })

    it("Test without children", () => {
        const
            app = <App />

        expect(shallow(app).prop("children")).toContain(undefined)
    })
})
