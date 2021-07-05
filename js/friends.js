const birthdayComponent = document.querySelector(".birthday-component");
const channelComponent = document.querySelector(".channel-component");
const chervonUpOrDowns = document.querySelectorAll(".fa-chevron-up, .fa-chevron-down");

function hadleChervonClick(event) {
    const chervon = event.target;
    const component = chervon.parentElement.parentElement.children[1];
    
    chervon.classList.toggle("fa-chevron-up");
    chervon.classList.toggle("fa-chevron-down");
    component.classList.toggle("display--none");
}

function handleBirthdayComponentDblClick(event) {
    console.dir(this);
}

function handleChannelComponentDblClick(event) {
    console.dir(this);
}

chervonUpOrDowns.forEach(ch => ch.addEventListener("click", hadleChervonClick));
birthdayComponent.addEventListener("dblclick", handleBirthdayComponentDblClick);
channelComponent.addEventListener("dblclick", handleChannelComponentDblClick);