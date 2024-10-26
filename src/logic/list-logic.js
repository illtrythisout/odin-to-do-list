export {
    lists,
    newList,
    addBullet,
    addToLocalStorage
}
import {
    updateTitle,
    addTitleBtnsDom, 
    addListDom,
    makeNewListDom,
    updateLists,
    addBulletDom,
    makeNewBulletDom
} from "../dom-logic/pages-dom-logic";


let lists = JSON.parse(localStorage.getItem("lists")) || {}; // Gets list obj from localStorage, or creates list obj if none exists yet

const addToLocalStorage = function () {
    localStorage.setItem("lists", JSON.stringify(lists));
}


const newList = function() {
    const processListValue = function() {
        if (listMakerInput.value) {
            if (lists[listMakerInput.value]) {
                listMakerInput.value = "";
                return;
            }
            lists[listMakerInput.value] = [];
            addToLocalStorage();
            addListDom(listMakerInput.value);
        }
        listMakerLi.remove();
        console.log(JSON.parse(localStorage.getItem("lists")))
    }


    if(document.querySelector(".listMakerButton") !== null) {return}; // Checks if there already is a addList button to prevent duplicates

    makeNewListDom();

    const listMakerInput = document.querySelector(".listMakerInput");
    listMakerInput.focus();

    const listMakerLi = document.querySelector(".listMakerLi")
    listMakerInput.addEventListener("blur", () => {
        setTimeout(() => {
            processListValue();
        }, 0);
    });
    listMakerInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            processListValue();
        }
    });

}

const addBullet = function(list, title, description, date) {
    let bullet = {
        title: title,
        description: description,
        date: date,
        completed: false
    };

    if (!lists[list]) {
        lists[list] = [];
    }

    lists[list].push(bullet);
    addToLocalStorage();
}