import "./styles.css";
import {lists, newList, addBullet} from "./list-logic";
import { updateTitle, addListDom, addBulletDom } from "./dom-logic/pages-dom-logic";

newList("Personal");
newList("Work");

addBullet("Work", "Complete Project", "Steps 1, 2, 3, and 4", new Date(), "high")
addBulletDom("Complete Project", "Steps 1, 2, 3, and 4", "21/10/2024")
addListDom("Work");

console.log(JSON.parse(localStorage.getItem("lists")))