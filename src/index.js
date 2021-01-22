document.addEventListener("DOMContentLoaded", () => {
let form = document.queryselector("#create-task-form");
let list = document.queryselector("#tasks");
let task = document.queryselector("#new-task-description");

form.addEventListener("submit",function(e) {
  e.preventdefault();
<<<<<<< HEAD
  list.innerHTML = `<li> ${task.value} <li>`
=======
  list.innerHTML = `<li>${task.value}<li>`
>>>>>>> bd64bb22e251e180fe67e138e9055cc5dca20918
})
});
