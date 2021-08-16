const userComponent = document.querySelectorAll(".user-component");

let isContextMenuFocus = false;

function handleUserComponentDblClick(event) {
    const title = this.querySelector(".user-component__title");

    if (title && title.innerText === "Raymond") {
        location.href = "chat.html";
    }
}

userComponent.forEach((com) =>
    com.addEventListener("dblclick", handleUserComponentDblClick)
);
