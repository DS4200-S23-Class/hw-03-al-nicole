function clickButton() {
  const body = document.querySelector("body");
  if (body.classList.contains("rainbow-box")) {
    body.classList.remove("rainbow-box");
  } else {
    body.classList.add("rainbow-box");
  }
}
