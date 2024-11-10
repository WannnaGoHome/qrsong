const wrapper = document.querySelector(".wrapper");
const secondPage = document.querySelector(".second-page");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  wrapper.classList.add("hidden"); 
  secondPage.classList.remove("hidden"); 
  history.pushState({ page: 2 }, "Second Page", "#second"); 
});

function moveNoButton() {
  const noBtnRect = noBtn.getBoundingClientRect();

  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.position = "absolute";
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}

noBtn.addEventListener("mouseover", moveNoButton);

noBtn.addEventListener("touchstart", moveNoButton);

window.addEventListener("popstate", (event) => {
  if (event.state && event.state.page === 2) {
    wrapper.classList.add("hidden");
    secondPage.classList.remove("hidden");
  } else {
    wrapper.classList.remove("hidden");
    secondPage.classList.add("hidden");
  }
});
