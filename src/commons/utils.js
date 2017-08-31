/**
 * Utils file
 */

function createMountPoint(divId: string) {
    // First off all, create a app element
    const div: Element = document.createElement("div"),
        body = document.body

    div.id = divId
    if (body) {
        body.appendChild(div)
    }
}

export {
    createMountPoint,
}