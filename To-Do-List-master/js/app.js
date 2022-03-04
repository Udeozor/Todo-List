// Selectors
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

// Classes names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

// Show today's date
const options = { weekday: "long", month: "short", day: "numeric" };
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);

// add to do
function addTodo(toDo) {
    const item = `<li class = "item"> <i class="fa fa-circle-thin co" job="complete" id="0"></i>
    <p class="text">Drink Coffee</p>
    <i class="fa fa-trash de" job="delete" id="0"></i> </i>`;




    const position = "beforeend";

    list.insertAdjacentHTML(position, item);
}

// Add an item to the list user the enter key

document.addEventListener("keydown", (event) => {
    if (event.key === 13) {
        const toDo = input.value;

        // If the input isn't empty
        if (toDo) {
            addTodo();

        }
    }
});

addTodo("drink coffee");