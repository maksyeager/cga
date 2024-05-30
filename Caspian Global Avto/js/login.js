const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");
const showPasswordBtn = document.querySelector(".show-passsword");

showPasswordBtn.addEventListener("click", (e)=>{
    e.preventDefault();

    if(passwordInput.type === "password"){
        passwordInput.type = "text";
        confirmPasswordInput.type = "text";
    }else{
        passwordInput.type = "password";
        confirmPasswordInput.type = "password";
    }
})