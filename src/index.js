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
    addBulletBtn,
    deleteListBtn,
    bulletCheckbox,
    deleteBulletBtn,
} from "./dom-logic/dom-elements"

updateLists();
addListBtn.addEventListener("click", newList);
addBulletBtn.addEventListener("click", newBullet)

// makeNewBulletDom()

// newBullet("My List", "Title", "A Description", "01/01/2024")
// newBullet("My List", "Tit le", "A Description", "01/01/2024")


console.log(JSON.parse(localStorage.getItem("lists")))