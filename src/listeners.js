import {
  addTaskBtnHandler,
  deleteAllBtnHandler,
  doneAllBtnHandler,
  listGroupEnterHandler,
  listGroupHandler,
  taskInputHandler,
} from "./handlers.js";
import {
  addTaskBtn,
  deleteAllBtn,
  doneAllBtn,
  listGroup,
  taskInput,
} from "./selectors.js";

const listener = () => {
  addTaskBtn.addEventListener("click", addTaskBtnHandler);
  taskInput.addEventListener("keyup", taskInputHandler);
  listGroup.addEventListener("click", listGroupHandler);
  listGroup.addEventListener("keyup", listGroupEnterHandler);
  deleteAllBtn.addEventListener("click", deleteAllBtnHandler);
  doneAllBtn.addEventListener("click", doneAllBtnHandler);
};

export default listener;
