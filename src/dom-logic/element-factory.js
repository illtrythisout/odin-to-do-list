export {
    makeElement,
    removeElement
}

const makeElement = function(tag, att, attValue, textContent, appendTo) {
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

const removeElement = function(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}