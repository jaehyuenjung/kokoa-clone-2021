const splashScreen = document.getElementById("splash-screen");
const loginForm = document.getElementById("login-form");

function handleLoginFormSubmit(event) {
    event.preventDefault();
    // console.dir(this.username.value);
    /**
     * @todo : 사용자 계정을 입력받아서 서버에 올림
     */
    
    location.href = "friends.html";
}

function handleAnimationEnd() {
    splashScreen.remove();
}

splashScreen.addEventListener("animationend", handleAnimationEnd);
loginForm.addEventListener("submit", handleLoginFormSubmit);