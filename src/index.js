import "./styles.css";
import {lists, newList, addBullet} from "./list-logic";

newList("Personal");
newList("Work");

addBullet("Work", "Complete Project", "Steps 1, 2, 3, and 4", new Date(), "high")

console.log(lists)