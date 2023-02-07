function clickButton() {
  // Get the body element of the document
  const body = document.querySelector("body");
  // Apply / remove rainbow background
  if (body.classList.contains("rainbow-box")) {
    body.classList.remove("rainbow-box");
  } else {
    body.classList.add("rainbow-box");
  }
}
