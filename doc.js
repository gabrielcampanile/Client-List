// Selecionando elementos

const slider = document.getElementById("slider");

const primaryText = document.querySelector(".primary-text");

const allButtons = document.querySelectorAll("button");

const title = document.querySelector(".title");

// Manipulando elementos

title.style.color = "red";

title.innerText = "Sou um título vermelho!";

title.classList.add("red-title");

// Criando elementos

const newButton = document.createElement("button");
newButton.className = "green-button";
newButton.innerText = "Sou um botão verde!";
newButton.style.color = "green";

document.querySelector(".container").appendChild(newButton);


// Removendo elementos

const container = document.querySelector(".container");
const element = document.querySelector(".element");

container.removeChild(element);


// Atribuindo funções

function darkMode() {
    document.body.style.backgroundColor = "black";
}

const button = document.querySelector(".dark-mode-button");

button.addEventListener("click", darkMode);

// Atribuindo funções anônimas

const darkModeButton = document.querySelector(".dark-mode-button");

button.addEventListener("click", function () {
    document.body.style.backgroundColor = "black";
});

