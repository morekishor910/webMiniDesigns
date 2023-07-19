const btnEl = document.getElementById(".btn");

btnEl.addEventListener("mouseover", (event) => {
  const x = event.pageX - btnEl.offsetLeft;
  const y = event.pagey - btnEl.offsetTop;

  btnEl.style.setProperty("--Xpos", x + "px");
  btnEl.style.setProperty("--Ypos", y + "px");
});
