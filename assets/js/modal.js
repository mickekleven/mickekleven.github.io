const modalOpen = document.querySelectorAll(".modal-open");
const modalClose = document.querySelector("#modal-close");

for (let i = 0; i < modalOpen.length; i++) {
  modalOpen[i].addEventListener("click", function () {
    const modal = document.querySelector(".modal-backdrop");
    setModal(modal);
  });
}

modalClose.addEventListener("click", function () {
  const modal = document.querySelector(".modal-backdrop");
  setModal(modal);
});

const setModal = (element) => {
  if (element.style.display === "block") {
    element.style.display = "none";
    console.log("Set to none");
  } else {
    element.style.display = "block";
    console.log("Set to block");
  }
};
