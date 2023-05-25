// Globals

const delayTime = 3000;

let parentAnchor = document.getElementById("parentAnchor");
let anchorLink = document.querySelector("#anchorElement");

let linkArray = [
  { anchorTxt: "Babaazoit project", link: "babaazoitproject.html" },
  { anchorTxt: "Personal project", link: "blzwasmproject.html" },
  { anchorTxt: "About me", link: "me.html" },
  { anchorTxt: "Skills", link: "skills.html" },
];

async function sleep(time) {
  return new Promise((resolve, _) => setTimeout(resolve, time));
}

async function scroller() {
  for (let i = 0; i < linkArray.length; i++) {
    setElement(linkArray[i]);

    if (i === linkArray.length - 1) {
      i = 0;
    }

    await sleep(2000);
  }

  //result.style.opacity = 0.2;
  await sleep(delayTime);
  //result.style.display = "none";
}

const setElement = (content) => {
  if (anchorLink === null) return;

  anchorLink.href = content.link;
  anchorLink.innerHTML = content.anchorTxt;
};

scroller();
