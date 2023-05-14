const skillId = document.querySelectorAll("cu-badge");

const languages = ["C#", "Razor Syntax", "Js[Isolation]", "Sass", "Css", "Html", "Sql"];

// Set lang information text to target element
const langPresFunc = () => {
  let _langPres = document.querySelector("#presLang");

  _langPres.html = "";

  let html = languages.map((x) => `<li>${x}</li>`).join("");

  console.log(html);

  if (_langPres !== null) {
    _langPres.insertAdjacentHTML("afterbegin", html);
  }
};

langPresFunc();
