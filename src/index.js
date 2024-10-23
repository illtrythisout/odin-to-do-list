import "./styles.css";
import {
    newList,
    addBullet
} from "./logic/list-logic";
import {
    updateTitle,
    addTitleBtnsDom,
    addListDom,
    addBulletDom,
    makeNewListDom,
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

newList("Personal");
newList("Work");

addBullet("Work", "Complete Project", "Steps 1, 2, 3, and 4", new Date(), "high")
addBulletDom("Complete Project", "Steps 1, 2, 3, and 4", "21/10/2024")
addListDom("Work");
addTitleBtnsDom();

makeNewListDom();
makeNewBulletDom();

console.log(JSON.parse(localStorage.getItem("lists")))