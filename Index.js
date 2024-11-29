// const [, , , a] = [10, 20, 30, 40, 50];
// console.log(a);
const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const btnElement = document.getElementById("btn");

const filterCompleted = document.getElementById("filterCompleted");
const FilterIncomplete = document.querySelector("#filterIncomplete");

const allListItems = [];
addTaskBtn.addEventListener("click", () => {
  // get input Text
  const getInputText = taskInput.value;

  let Inputs = getInputText
    .trim()
    .split(" ")
    .filter((word) => word !== "");

  Inputs.forEach((El, In) => {
    let List = document.createElement("li");
    List.id = `Lis-${In}`;
    console.log(`Lis-${In}`);
    List.innerHTML = `${El} <button id="btn">❌</button>`;

    taskList.appendChild(List);
    allListItems.push(List);

    let btn = List.querySelector("#btn");

    let count = 0; // state Value

    btn.addEventListener("click", () => {
      List.classList.toggle("completed");
    });
  });
});

filterCompleted.addEventListener("click", () => {
  let FilterItem = allListItems.filter((Item, Index) => {
    // return console.log(Item.classList.contains("completed"));
    // console.log(Item);

    if (!Item.classList.contains("completed")) {
      Item.style.display = "none";
      return true;
    }
    return false;
  });

  // console.log(btn);
  // console.log("s", In);
});
