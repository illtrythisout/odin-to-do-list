export {makeElement, removeElement}

function makeElement(tag, att, attValue, textContent, appendTo) {
    let element = document.createElement(tag);
    if(att) {
        element.setAttribute(att, attValue);
    }
    if(textContent) {
        element.textContent = textContent;
    }
    appendTo.appendChild(element);

    return element
}

function removeElement(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}