let btn = document.querySelector("button");
let input = document.querySelector("input");
let showTask = document.querySelector(".taskContainer");

/********************THIS METHOD WILL DELETE THE CORRESPONDING TASK AFTER CLICKING THE DELETE BUTTON===============================*/
const deleteTask = (eid) => {
    eid.parentNode.remove();
}
/*==================END OF DELETE METHOD=========================*/

/*=====================THIS METHOD WILL SHOW THE USER THAT THE TASK HAS BEEN COMPLETED=============================================*/
const taskComplete = (eid) => {
    eid.parentNode.style.backgroundColor = "green";
    eid.style.display = "none"
}
/*====================END OF COMPLETE METHOD=====================*/

btn.addEventListener("click", () => {
    showTask.innerHTML += `
    <div class="task">
        <p>${input.value}</p>
        <button onclick="taskComplete(this)">Complete</button>
        <button onclick="deleteTask(this)">Delete</button>
    </div>
    `
})