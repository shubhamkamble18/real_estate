function loggin() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let error = document.getElementById("error");
  if (email === "admin@123" && password === "123456") {
    localStorage.setItem("isloggedin", "true");
    localStorage.setItem("user", "email");
    window.location.href = "index.html";
  } else {
    error.innerText= "invaild email and password";
  }
}
function toggle(){
    let passinput = document.getElementById("password");
    if(passinput.type==="password"){
        passinput.type="text";
    }
    else{
        passinput.type="password"
    }

}
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")){
    hamburger.innerText = " X ";
  } 
  else{
     hamburger.innerText = " ☰ ";
  }
});