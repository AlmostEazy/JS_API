// Выводит диалоговое окно только если есть введенные данные
const beforeUnloadHandler = (event) => {
    event.preventDefault();
};
  
  const nameInput = document.querySelector(".comments");
  
  nameInput.addEventListener("input", (event) => {
    if (event.target.value !== "") {
      window.addEventListener("beforeunload", beforeUnloadHandler);
    } else {
      window.removeEventListener("beforeunload", beforeUnloadHandler);
    }
  });

// Не определяет ввели мы что-либо или нет. Постоянно выводит диалоговое окно
// window.onbeforeunload = function() {
//     return true;
// }