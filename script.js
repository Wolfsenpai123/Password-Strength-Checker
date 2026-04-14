const password = document.getElementById("password");
const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strengthText");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.textContent = "Show";

toggleBtn.addEventListener("click", () =>{
    if (password.type === "password") {
        password.type = "text";
        toggleBtn.textContent = "Hide";
    } else {
        password.type = "password";
        toggleBtn.textContent = "Show";
    }
});

password.addEventListener("input", () => {
    let val = password.value;
    let strength = 0;

    if(val.match(/[a-z]/)) strength++;
    if(val.match(/[A-Z]/)) strength++;
    if(val.match(/[0-9]/)) strength++;
    if(val.match(/[@#$%^!&*]/)) strength++;
    if(val.length >= 8) strength++;

    if(val == ""){
        strengthBar.style.width = "0%";
        strengthBar.style.background = "transparent";
        strengthText.innerText = "Start Typing...";
    };

    switch(strength){
        case 1:
            strengthBar.style.width = "20%";
            strengthBar.style.background = "#ff4d4d";
            strengthText.textContent = "Very Weak";
            break;
        case 2:
            strengthBar.style.width = "40%";
            strengthBar.style.background = "#ff914d";
            strengthText.textContent = "Weak";
            break;
        case 3:
            strengthBar.style.width = "60%";
            strengthBar.style.background = "#3ff93c";
            strengthText.textContent = "Medium";
            break;
        case 4:
            strengthBar.style.width = "80%";
            strengthBar.style.background = "#7cd992";
            strengthText.textContent = "Strong";
            break;
        case 5:
            strengthBar.style.width = "100%";
            strengthBar.style.background = "#4dff88";
            strengthText.textContent = "Very Strong";
            break;
    }
});
