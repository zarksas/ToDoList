const input = document.querySelector(".input");
const add = document.querySelector("button");
const todo_list = document.querySelector(".todo-list");

add.addEventListener("click", () => {
  const div = document.createElement("div");
  const button = document.createElement("button");
  const line = document.createElement("hr");

  let text = document.createElement("div");
  const chekbox = document.createElement("input");

  text.textContent = input.value;
  button.textContent = "x";
  chekbox.type = "checkbox";

  line.classList.add("line");
  div.classList.add("list_item");

  button.addEventListener("click", (e) => {
    e.target.parentElement.remove();
    line.remove();
  });
  todo_list.append(div, line);
  div.append(chekbox, text, button);
});
