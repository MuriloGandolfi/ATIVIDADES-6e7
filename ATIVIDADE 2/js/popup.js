
const loginPopup = document.querySelector(".login-popup");
const close = document.querySelector(".close");


window.addEventListener("load",function(){

 showPopup();
 // setTimeout(function(){
 //   loginPopup.classList.add("show");
 // },5000)

})

function showPopup(){
      const timeLimit = 1 // seconds;
      let i=0;
      const timer = setInterval(function(){
       i++;
       if(i == timeLimit){
        clearInterval(timer);
        loginPopup.classList.add("show");
       } 
       console.log(i)
      },1000);
    
}


$(document).ready(function(){
    $("#login-popup").submit(function (event){
        event.preventDefault();

        const username = $("Username").val();
        const password = $("Password").val();

        if(username === "xxx@gmail.com" && password === "666") {
            $("#loginMessage").text("Bem-vindo!").css("color", "green");

            // Armazena o usuário e redireciona para a página principal
            localStorage.setItem("Email", username);
            setTimeout(() => window.location.href = "index.html", 1000);
        } else {
            $("#loginMessage").text("Usuário ou senha incorretos.").css("color", "red");
        }
        });
    });
;

