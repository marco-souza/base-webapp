/**
 * App
 *
 * @flow
 */
import React from "react"

type Props = {
    children: any
}

class Component extends React.Component<Props> {
    render() {
        return (
            <div>
                trotsky ta bêbado
                {this.props.children}
            </div>
        )
    }
}

export default Component
