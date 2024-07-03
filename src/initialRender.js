import { addList, tasks } from "./list.js";


const initialRender = () => {
    // console.log("I am per Render at app start");
    tasks.forEach((task) => addList(task));
};

export default initialRender;