export {
    lists,
    newList,
    newBullet,
    addToLocalStorage
}
import {
    updateTitle,
    addTitleBtnsDom, 
    addListDom,
    makeNewListDom,
    updateLists,
    addBulletDom,
    makeNewBulletDom,
    updateBullets
} from "../dom-logic/pages-dom-logic";


let lists = JSON.parse(localStorage.getItem("lists")) || {}; // Gets list obj from localStorage, or creates list obj if none exists yet

const addToLocalStorage = function () {
    localStorage.setItem("lists", JSON.stringify(lists));
}


const newList = function() {
    const processListValue = function() {
        if (listMakerInput.value) {
            if (lists[listMakerInput.value] || listMakerInput.value === "Today" || listMakerInput.value === "This Week") {
                listMakerInput.value = "";
                return;
            }
            lists[listMakerInput.value] = [];
            addToLocalStorage();
            updateLists()
        }
        listMakerLi.remove();
        console.log(JSON.parse(localStorage.getItem("lists")))
    }


    if(document.querySelector(".listMakerButton") !== null) {return}; // Checks if there already is a addList input to prevent duplicates

    makeNewListDom();

    const listMakerInput = document.querySelector(".listMakerInput");
    listMakerInput.focus();

    const listMakerLi = document.querySelector(".listMakerLi")
    listMakerInput.addEventListener("blur", () => {
        setTimeout(() => {
            processListValue();
        }, 0);
    });

}

const newBullet = function() {

    const processBulletValue = function() {
        const currentList = document.querySelector(".listTitle").textContent
        if (bulletTitleInput.value) {
            if (lists[currentList].find(bullet => bullet.title === bulletTitleInput.value)) {
                bulletTitleInput.value = "";
                return;
            }
            if (!bulletTitleInput.value) {
                return;
            }
            console.log(bulletTitleInput.value + bulletDescriptionInput.value + bulletDateInput.value + bulletCheckmarkInput.checked)
            lists[currentList].push({
                title: bulletTitleInput.value,
                description: bulletDescriptionInput.value,
                date: bulletDateInput.value,
                completed: bulletCheckmarkInput.checked
            });
            addToLocalStorage();
            updateBullets(currentList);
        }
        bulletMaker.remove();
        // console.log(JSON.parse(localStorage.getItem("lists")))
    }


    if(document.querySelector(".bulletMaker") !== null) {return}; // Checks if there already is a addBullet input to prevent duplicates

    makeNewBulletDom();

    const bulletTitleInput = document.querySelector(".bulletTitleInput");
    const bulletDescriptionInput = document.querySelector(".bulletDescriptionInput");
    const bulletDateInput = document.querySelector(".bulletDateInput");
    const bulletCheckmarkInput = document.querySelector(".checkmark");
    bulletTitleInput.focus();

    const bulletMaker = document.querySelector(".bulletMaker")

    setTimeout(() => {
        document.addEventListener("click", (e) => {
            if(!bulletMaker.contains(e.target)) {
                processBulletValue();
            }
        })
    }, 0)

}