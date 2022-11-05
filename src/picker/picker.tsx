import React from "react";



// main picker code
export function readingElement(elem: HTMLElement, doc: Document, win: Window) {
    let selected : string = "";
    var current = "";

    doc.addEventListener('click', clickEvent => {
        clickEvent.preventDefault();
        selected += "<p>" + doc.elementFromPoint(clickEvent.clientX, clickEvent.clientY) + "</p>";
    })
    
    doc.addEventListener('mousemove', hoverEvent => {
        current = "<p>" + doc.elementFromPoint(hoverEvent.clientX, hoverEvent.clientY) + "</p>";
        elem.innerHTML = selected + current;
    }, {passive: true})
}

export function stopReadingElement(elem: HTMLElement, doc: Document, win: Window) {

}

module.exports = {
    readingElement
}