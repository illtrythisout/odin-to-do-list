import "./styles.css";
import {
    newList,
    newBullet,
    todayListLogic,
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
    addBulletBtn,
    deleteListBtn,
    bulletCheckbox,
    deleteBulletBtn,
} from "./dom-logic/dom-elements"

updateLists();
todayListBtn.addEventListener("click",todayListLogic)
addListBtn.addEventListener("click", newList);
addBulletBtn.addEventListener("click", newBullet)



console.log(JSON.parse(localStorage.getItem("lists")))