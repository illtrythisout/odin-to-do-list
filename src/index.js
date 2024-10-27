import "./styles.css";
import {
    newList,
    newBullet,
} from "./logic/list-logic";
import {
    updateTitle,
    addTitleBtnsDom, 
    addListDom,
    makeNewListDom,
    updateLists,
    addBulletDom,
    makeNewBulletDom
} from "./dom-logic/pages-dom-logic";
import {
    todayListBtn,
    thisWeekListBtn,
    userListBtns,
    addListBtn,
    deleteListBtn,
    editListBtn,
    bulletCheckbox,
    deleteBulletBtn,
} from "./dom-logic/dom-elements"

updateLists();
addListBtn.addEventListener("click", newList);

console.log(JSON.parse(localStorage.getItem("lists")))