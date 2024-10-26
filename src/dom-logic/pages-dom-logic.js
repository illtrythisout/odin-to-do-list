import {
    makeElement,
    removeElement
} from "./element-factory";
import {lists} from "../logic/list-logic";
import editImg from "../images/edit.svg";
import deleteImg from "../images/delete.svg";
export {
    updateTitle,
    addTitleBtnsDom, 
    addListDom,
    makeNewListDom,
    updateLists,
    addBulletDom,
    makeNewBulletDom
}

const updateTitle = function (content) {
    const title = document.querySelector(".listTitle");
    title.textContent = content;
}
const addTitleBtnsDom = function () {
    const container = document.querySelector(".listTitleActions");

    const listDeleteBtn = makeElement("button", "id", "deleteListBtn", "", container);
    const listDeleteImg = makeElement("img", "alt", "delete list", "", listDeleteBtn);
    listDeleteImg.src = deleteImg;

    const listEditBtn = makeElement("button", "id", "editListBtn", "", container);
    const listEditImg = makeElement("img", "alt", "edit bullet", "", listEditBtn);
    listEditImg.src = editImg;
}

const addListDom = function (title) {
    const container = document.querySelector(".listsOptions");

    const listsOptionsLi = makeElement("li", "class", "listsOptionsLi", "", container);
    const listButton = makeElement("button", "", "", title, listsOptionsLi);
}
const makeNewListDom = function () {
    const container = document.querySelector(".listsOptions");

    const listMakerLi = makeElement("li", "class", "listsOptionsLi listMakerLi", "", container);
    const listMakerButton = makeElement("button", "class", "listMakerButton", "", listMakerLi);
    const listMakerInput = makeElement("input", "type", "text", "", listMakerButton);
    listMakerInput.setAttribute("maxlength", "20");
    listMakerInput.setAttribute("class", "listMakerInput");
}
const updateLists = function (obj = lists) {
    const listsArr = Object.keys(obj);
    const container = document.querySelector(".listsOptions");
    container.innerHTML = "";

    listsArr.forEach((value) => {
        addListDom(value);
    });
}

const addBulletDom = function (title, description, date) {
    const container = document.querySelector(".bulletsDiv");


    const bulletPoint = makeElement("div", "class", "bulletPoint", "", container);

    const checkBoxSurround = makeElement("label", "class", "checkBoxSurround", "", bulletPoint);
    const checkbox = makeElement("input", "class", "checkbox", "", checkBoxSurround);
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", "completeBullet");
    checkbox.setAttribute("value", title);
    const checkmark = makeElement("span", "class", "checkmark", "", checkBoxSurround);

    const bulletText = makeElement("div", "class", "bulletText", "", bulletPoint);
    const bulletTitle = makeElement("h3", "class", "bulletTitle", title, bulletText);
    const bulletDescription = makeElement("p", "class", "bulletDescription", description, bulletText);

    const bulletDate = makeElement("p", "class", "bulletDate", date, bulletPoint);

    const bulletDelete = makeElement("button", "class", "bulletDelete", "", bulletPoint);
    bulletDelete.setAttribute("value", title);
    const bulletDeleteImg = makeElement("img", "alt", "edit bullet", "", bulletDelete);
    bulletDeleteImg.src = deleteImg;
}
const makeNewBulletDom = function (title, description, date) {
    const container = document.querySelector(".bulletsDiv");


    const bulletPoint = makeElement("div", "class", "bulletPoint", "", container);

    const checkBoxSurround = makeElement("label", "class", "checkBoxSurround", "", bulletPoint);
    const checkmark = makeElement("span", "class", "checkmark", "", checkBoxSurround);

    const bulletText = makeElement("div", "class", "bulletText", "", bulletPoint);
    const BulletMakerTitleInput = makeElement("input", "type", "text", "", bulletText);
    BulletMakerTitleInput.setAttribute("maxlength", "20");
    BulletMakerTitleInput.setAttribute("class", "bulletTitle");
    BulletMakerTitleInput.setAttribute("placeholder", "Title");
    const BulletMakerDescriptionInput = makeElement("input", "type", "text", "", bulletText);
    BulletMakerDescriptionInput.setAttribute("maxlength", "25");
    BulletMakerDescriptionInput.setAttribute("class", "bulletDescription");
    BulletMakerDescriptionInput.setAttribute("placeholder", "Description");

    const bulletDate = makeElement("input", "type", "text", "", bulletPoint);
    bulletDate.setAttribute("maxlength", "10");
    bulletDate.setAttribute("class", "bulletDate");
    bulletDate.setAttribute("placeholder", "dd/mm/yy");

    const bulletDelete = makeElement("button", "class", "bulletDelete", "", bulletPoint);
    const bulletDeleteImg = makeElement("img", "alt", "edit bullet", "", bulletDelete);
    bulletDeleteImg.src = deleteImg;
}