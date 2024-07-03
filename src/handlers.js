import Swal from "sweetalert2";
import { addList, deleteList, doneList, editList } from "./list.js";
import { deleteAllBtn, listGroup } from "./selectors.js";

export const listGroupHandler = (event) => {
  const list = event.target.closest(".list");
  if (event.target.classList.contains("list-del-btn")) {
    deleteList(event.target.closest(".list").id);
  }
  if (event.target.classList.contains("list-edit-btn")) {
    editList(event.target.closest(".list").id);
  }
  if (event.target.classList.contains("list-done-check")) {
    doneList(event.target.closest(".list").id);
  }
};

export const addTaskBtnHandler = () => {
  // console.log(taskInput.value.trim() ? true : false);
  if (taskInput.value.trim()) {
    addList(taskInput.value);
  } else {
    alert("You must write at least one word!");
  }
};

export const taskInputHandler = (event) => {
  // console.clear();
  // console.log(event);
  if (event.key === "Enter") {
    if (taskInput.value.trim()) {
      addList(taskInput.value);
    } else {
      alert("You must write at least one word!");
    }
  }
};

export const listGroupEnterHandler = (event) => {
  if (event.key === "Enter") {
    console.log("You entered");
  }
};

export const deleteAllBtnHandler = () => {
  Swal.fire(
    {
      title: "Delete All Task?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete All!"
    }
  ).then((result) => {
    if(result.isConfirmed){
  
      const allLists = listGroup.querySelectorAll(".list");
      allLists.forEach((list) => list.remove()); 
    };
  });
};

// export const deleteAllBtnHandler = () => {
//   if (confirm("Are you sure to delete ALL TASKS??")) {
    // const allLists = listGroup.querySelectorAll(".list");
    // allLists.forEach((list) => list.remove());
//   }
// };

export const doneAllBtnHandler = () => {
  Swal.fire(
    {
      title: "Done All Task?",
      text: "This mean you had completed all the tasks!",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Just done all!"
    }
  ).then((result) => {
    if(result.isConfirmed){
        const allLists = listGroup.querySelectorAll(".list");
        allLists.forEach((list) => {
        list.querySelector(".list-done-check").checked = true;
        doneList(list.id);
     });
    };
  });
};

// export const doneAllBtnHandler = () => {
//   if (confirm("Are you sure to done ALL TASKS??")) {
//     const allLists = listGroup.querySelectorAll(".list");
//     allLists.forEach((list) => {
//     list.querySelector(".list-done-check").checked = true;
//     doneList(list.id);
//  });

//   };
// };