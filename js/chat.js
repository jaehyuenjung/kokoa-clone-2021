const messageRow = document.querySelector(".message-row");
const replyForm = document.querySelector(".reply-form");
const inputText = document.querySelector(".reply-form input");

const CLASS_NAME_BUBBLE = "message__bubble";
const CLASS_NAME_UNREADERS = "message__unreaders";
const CLASS_NAME_TIME = "message__time";

function createMessageEle() {
    const divRow = document.createElement("div");
    const divConent = document.createElement("div");
    const divInfo = document.createElement("div");
    const spanBubble = document.createElement("span");
    const divNotice = document.createElement("div");
    const spanUnreaders = document.createElement("span");
    const spanTime = document.createElement("span");

    divRow.className = "message-row__me";
    divConent.className = "message-row__content";
    divInfo.className = "message__info";
    spanBubble.className = CLASS_NAME_BUBBLE;
    divNotice.className = "message__notice";
    spanUnreaders.className = CLASS_NAME_UNREADERS;
    spanTime.className = CLASS_NAME_TIME;

    divRow.appendChild(divConent);
    divConent.appendChild(divInfo);
    divInfo.appendChild(spanBubble);
    divInfo.appendChild(divNotice);
    divNotice.appendChild(spanUnreaders);
    divNotice.appendChild(spanTime);

    return divRow;
}

function handleReplyFormSubmit(event) {
    event.preventDefault();
    const message = inputText.value;

    if (message === "") {
        return;
    }

    const divRow = createMessageEle();

    const curDate = new Date();
    divRow.querySelector(`.${CLASS_NAME_BUBBLE}`).innerText = message;
    divRow.querySelector(`.${CLASS_NAME_UNREADERS}`).innerText = 1;
    divRow.querySelector(`.${CLASS_NAME_TIME}`).innerText = `${curDate.getHours()}:${curDate.getMinutes()}`;
    messageRow.appendChild(divRow);

    inputText.value = "";

    window.scrollTo(0,document.body.scrollHeight);
}

replyForm.addEventListener("submit", handleReplyFormSubmit);