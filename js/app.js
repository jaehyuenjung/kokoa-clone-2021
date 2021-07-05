const navBarLinks = document.querySelectorAll(".nav-bar__link");
const userComponent = document.querySelectorAll(".user-component");
const btnGifts = document.querySelectorAll(".user-component__btn-gift");

let isContextMenuFocus = false;

function handleUserComponentDblClick(event) {
    console.dir(this);
}

function handleBtnGiftClick(event) {
    console.dir(this);
}

navBarLinks.forEach(l => {
    if (l.href === document.location.href) {
        l.classList.add("btn--choosed");
    }
});

userComponent.forEach(com => com.addEventListener("dblclick", handleUserComponentDblClick));
btnGifts.forEach(btn => btn.addEventListener("click", handleBtnGiftClick));

