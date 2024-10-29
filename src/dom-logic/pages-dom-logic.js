import {
    makeElement,
    removeElement
} from "./element-factory";
import {
    lists,
    addToLocalStorage
} from "../logic/list-logic";
import { todayListBtn } from "./dom-elements";
import editImg from "../images/edit.svg";
import deleteImg from "../images/delete.svg";
export {
    updateTitle,
    addTitleBtnsDom, 
    addListDom,
    makeNewListDom,
    updateLists,
    addBulletDom,
    makeNewBulletDom,
    updateBullets
}

const updateTitle = function (content) {
    const title = document.querySelector(".listTitle");
    title.textContent = content;
}
const loadPage = function (btn = todayListBtn) {
    if (btn.textContent !== "Today" && btn.textContent !== "This Week" && (document.querySelector("#deleteListBtn")) === null ) {
        addTitleBtnsDom(btn.textContent);
    }
    console.log(`List button clicked: ${btn.textContent}`)
    updateTitle(btn.textContent);
    updateBullets(btn.textContent);
}
const addTitleBtnsDom = function (title) {
    const container = document.querySelector(".listTitleActions");

    const listDeleteBtn = makeElement("button", "id", "deleteListBtn", "", container);
    const listDeleteImg = makeElement("img", "alt", "delete list", "", listDeleteBtn);
    listDeleteImg.src = deleteImg;

    listDeleteBtn.addEventListener("click", () => {
        delete lists[title]
        addToLocalStorage();
        listDeleteBtn.remove()

        updateLists();

        updateTitle("");
        const bulletContainer = document.querySelector(".bulletsDiv");
        bulletContainer.innerHTML = "";
        
    })

}

const addListDom = function (title) {
    const container = document.querySelector(".listsOptions");

    const listsOptionsLi = makeElement("li", "class", "listsOptionsLi", "", container);
    const listButton = makeElement("button", "class", "listsOptionsBtn", title, listsOptionsLi);
}
const makeNewListDom = function () {
    const container = document.querySelector(".listsOptions");

    const listMakerLi = makeElement("li", "class", "listsOptionsLi listMakerLi", "", container);
    const listMakerButton = makeElement("button", "class", "listMakerButton", "", listMakerLi);
    const listMakerInput = makeElement("input", "type", "text", "", listMakerButton);
    listMakerInput.setAttribute("maxlength", "20");
    listMakerInput.setAttribute("class", "listMakerInput");
}
const updateLists = function () {
    const listsArr = Object.keys(lists);
    const container = document.querySelector(".listsOptions");
    container.innerHTML = "";

    listsArr.forEach((value) => {
        addListDom(value);
    });

    const addEventListenersToUserListBtns = function () {
        const userListBtns = document.querySelectorAll(".listsOptionsBtn");
        userListBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                loadPage(btn);
            });
        });
    };
    addEventListenersToUserListBtns();
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
const makeNewBulletDom = function () {
    const container = document.querySelector(".bulletsDiv");

    const bulletPoint = makeElement("div", "class", "bulletPoint bulletMaker", "", container);

    const checkBoxSurround = makeElement("label", "class", "checkBoxSurround", "", bulletPoint);
    const checkmark = makeElement("span", "class", "checkmark", "", checkBoxSurround);

    const bulletText = makeElement("div", "class", "bulletText", "", bulletPoint);
    const BulletMakerTitleInput = makeElement("input", "type", "text", "", bulletText);
    BulletMakerTitleInput.setAttribute("maxlength", "20");
    BulletMakerTitleInput.setAttribute("class", "bulletTitle bulletTitleInput");
    BulletMakerTitleInput.setAttribute("placeholder", "Title");
    const BulletMakerDescriptionInput = makeElement("input", "type", "text", "", bulletText);
    BulletMakerDescriptionInput.setAttribute("maxlength", "25");
    BulletMakerDescriptionInput.setAttribute("class", "bulletDescription bulletDescriptionInput");
    BulletMakerDescriptionInput.setAttribute("placeholder", "Description");

    const bulletDate = makeElement("input", "type", "date", "", bulletPoint);
    bulletDate.setAttribute("class", "bulletDate bulletDateInput");

}
const updateBullets = function (currentList) {
    let bulletsArr = lists[currentList];
    const container = document.querySelector(".bulletsDiv");
    container.innerHTML = "";

    bulletsArr.forEach( obj => {
        addBulletDom(obj.title, obj.description, obj.date);
    });

    const addEventListenersToUserBulletBtns = function () {
        const bulletCheckbox = document.querySelectorAll(".checkbox");
        bulletCheckbox.forEach(btn => {
            btn.addEventListener("click", () => {
                const bulletTitle = btn.value;
            const bullet = lists[currentList].find(bullet => bullet.title === bulletTitle);
            if (bullet) {
                bullet.completed = btn.checked;
                addToLocalStorage();
            }
            });
        });

        const bulletDelete = document.querySelectorAll(".bulletDelete");
        bulletDelete.forEach(btn => {
            btn.addEventListener("click", () => {
                const bulletTitle = btn.value;
                const bulletIndex = bulletsArr.findIndex(bullet => bullet.title === bulletTitle);
                if (bulletIndex !== -1) {
                    bulletsArr.splice(bulletIndex, 1);
                    addToLocalStorage();
                    updateBullets(currentList);
                }
            });
        });

    };
    addEventListenersToUserBulletBtns();
}