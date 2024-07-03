//------- Actions ------- (Business logic)
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';

export const tasks = ["To read JS Book","Sleep Early","Feed the cats"];

export const updateTaskTotal = () => {
  //count list and update
  const lists = document.querySelectorAll(".list");
  taskTotal.innerText = lists.length;
};

export const updateDoneTaskTotal = () => {
  //count list and update
  const lists = document.querySelectorAll(".list input:checked");
  doneTaskTotal.innerText = lists.length;
};
//create new list
export const createNewList = (currentTask) => {
  const list = listTemplate.content.cloneNode(true);
  list.querySelector(".list").id = "list" +uuidv4();
  list.querySelector(".list-task").innerText = currentTask;
  return list;
};

export const deleteList = (listId) => {
  // console.log("You deleted.");
  const currentList = document.querySelector(`#${listId}`);
  // console.log(currentList);
  // if (window.confirm("Are you sure to delete?")) {
  //   currentList.classList.add("animate__animated", "animate__zoomOutDown");
  //   currentList.addEventListener("animationend", () => {
  //     currentList.remove();
  //     updateDoneTaskTotal();
  //     updateTaskTotal();
  //   });
  // };

  Swal.fire(
    {
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!"
    }
  ).then((result) => {
    if(result.isConfirmed){
          currentList.classList.add("animate__animated", "animate__zoomOutDown");
          currentList.addEventListener("animationend", () => {
            currentList.remove();
            updateDoneTaskTotal();
            updateTaskTotal();
          });
    }
  });
};

export const editList = (listId) => {
  const currentList = document.querySelector(`#${listId}`);

  const listDoneCheck = currentList.querySelector(".list-done-check");
  const listTask = currentList.querySelector(".list-task");
  const listEditBtn = currentList.querySelector(".list-edit-btn");

  listEditBtn.setAttribute("disabled", true);
  listDoneCheck.setAttribute("disabled", true);
  const currentTask = listTask.innerText;
  const newTaskInput = document.createElement("input");
  newTaskInput.className =
    "border border-stone-950 font-mono px-2 py-1 w-[180px] focus-visible:outline-none";
  newTaskInput.value = currentTask;
  listTask.after(newTaskInput);
  newTaskInput.focus();
  listTask.classList.add("hidden");

  newTaskInput.addEventListener("blur", () => {
    listEditBtn.removeAttribute("disabled");
    listDoneCheck.removeAttribute("disabled");
    listTask.innerText = newTaskInput.value;
    listTask.classList.remove("hidden");
    newTaskInput.remove();
  });

  newTaskInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      listEditBtn.removeAttribute("disabled");
      listDoneCheck.removeAttribute("disabled");
      listTask.innerText = newTaskInput.value;
      listTask.classList.remove("hidden");
      newTaskInput.remove();
    }
  });
};

export const doneList = (listId) => {
  const currentList = document.querySelector(`#${listId}`);

  const listDoneCheck = currentList.querySelector(".list-done-check");
  const listTask = currentList.querySelector(".list-task");
  const listEditBtn = currentList.querySelector(".list-edit-btn");

  listTask.classList.toggle("line-through");
  currentList.classList.toggle("opacity-20");
  currentList.classList.toggle("scale-90");
  currentList.classList.add("duration-200");
  // console.log(listDoneCheck.checked);
  if (listDoneCheck.checked) {
    listEditBtn.setAttribute("disabled", true);
  } else {
    listEditBtn.removeAttribute("disabled");
  }
  updateDoneTaskTotal();
};

export const addList = (text) => {
  // console.log(taskInput.value);
  //mount list to listGroup
  listGroup.append(createNewList(text));
  taskInput.value = "";
  updateTaskTotal();
};
