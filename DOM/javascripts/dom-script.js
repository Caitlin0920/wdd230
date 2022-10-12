const input = document.querySelector("input")
const button = document.querySelector("button")
const list = document.querySelector("ul")

button.addEventListener('click', function() {
    let item = input.value;

    const listItem = document.createElement("li");
    const listContent = document.createElement("span");
    const listButton = document.createElement("button");

    listItem.appendChild(listContent);
    listContent.textContent = item;
    listItem.appendChild(listButton);
    listButton.textContent = "❌";

    list.appendChild(listItem);

    input.value = "";

    listButton.addEventListener("click", function() {
        list.remove(listItem);
    });

});