import {makeElement, removeElement} from "./element-factory";
import editImg from "../images/edit.svg";
import deleteImg from "../images/delete.svg";
export {updateTitle, addTitleBtnsDom, addListDom, addBulletDom}

const updateTitle = function (content) {
    const title = document.querySelector(".listTitle");
    title.textContent = content;
}

const addTitleBtnsDom = function () {
    const container = document.querySelector(".listTitleActions");

    const listDeleteBtn = makeElement("button", "", "", "", container);
    const listDeleteImg = makeElement("img", "alt", "delete list", "", listDeleteBtn);
    listDeleteImg.src = deleteImg;

    const listEditBtn = makeElement("button", "", "", "", container);
    const listEditImg = makeElement("img", "alt", "edit bullet", "", listEditBtn);
    listEditImg.src = editImg;
}

const addListDom = function (title) {
    const container = document.querySelector(".listsOptions");

    const listsOptionsLi = makeElement("li", "class", "listsOptionsLi", "", container);
    const listButton = makeElement("button", "", "", title, listsOptionsLi);
}

const addBulletDom = function (title, description, date) {
    const container = document.querySelector(".bulletsDiv");


    const bulletPoint = makeElement("div", "class", "bulletPoint", "", container);

    const checkBoxSurround = makeElement("label", "class", "checkBoxSurround", "", bulletPoint);
    const checkbox = makeElement("input", "class", "checkbox", "", checkBoxSurround);
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", "completeBullet");
    const checkmark = makeElement("span", "class", "checkmark", "", checkBoxSurround);

    const bulletText = makeElement("div", "class", "bulletText", "", bulletPoint);
    const bulletTitle = makeElement("h3", "class", "bulletTitle", title, bulletText);
    const bulletDescription = makeElement("p", "class", "bulletDescription", description, bulletText);

    const bulletDate = makeElement("p", "class", "bulletDate", date, bulletPoint);

    const bulletEdit = makeElement("button", "class", "bulletEdit", "", bulletPoint);
    const bulletEditImg = makeElement("img", "alt", "edit bullet", "", bulletEdit);
    bulletEditImg.src = editImg;
}