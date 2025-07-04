function upDate(previewPic) {
  console.log("Triggered upDate for", previewPic.alt);
  const imageDiv = document.getElementById("image");
  imageDiv.innerHTML = previewPic.alt;
  imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
}

function undo() {
  console.log("Triggered undo");
  const imageDiv = document.getElementById("image");
  imageDiv.innerHTML = "Hover over an image below to display here.";
  imageDiv.style.backgroundImage = "url('')";
}

function addTabFocus() {
  console.log("Page loaded. Adding tabindex to images...");
  const images = document.querySelectorAll(".preview");

  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
  }
}
