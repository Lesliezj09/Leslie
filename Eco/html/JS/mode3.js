
let theme = "light";

function addDarkTheme() {
  const link = document.createElement("link");
  link.id = "theme-css-dark";
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = "CSS/mode1.css";
  document.querySelector("head").appendChild(link);
}

function removeDarkTheme() {
  document.querySelector("#theme-css-dark").remove();
}

const light = () => {
    removeDarkTheme();
    theme = "light";
}

const dark = () => {
    addDarkTheme();
    theme = "dark";
}
