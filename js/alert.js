var h1Header=document.querySelector(".header-h1-one")
var h1HeaderTwo=document.querySelector(".header-h1-two");
var h1HeaderIcon=document.querySelector(".header-h1-icon");
let user = prompt("welcome! Who is it who will be using the camera?")

if(user === null){
    user=""
}
//let user = "placeholder"

if(user.length > 5){
    h1Header.style.fontSize="25px"
    h1HeaderTwo.style.fontSize="25px"
    h1HeaderIcon.style.fontSize="25px"
}




h1Header.innerHTML = `${user}'s`;