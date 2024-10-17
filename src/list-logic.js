export {lists, newList, addBullet}

let lists = {};

function addToLocalStorage() {
    localStorage.setItem("lists", JSON.stringify(lists));
}

function newList(name) {
    if (lists[name] === undefined) {
        lists[name] = [];
        addToLocalStorage();
    } else {
        console.log("pick a different name");
    }
}

function addBullet(list, title, description, date, priority) {
    let bullet = {title: title, description: description, date: date, priority: priority};
    lists[list].push(bullet);
    addToLocalStorage();
}