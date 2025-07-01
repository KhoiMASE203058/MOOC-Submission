function upDate(previewPic) {
  console.log("Triggered upDate");
  console.log("Image source:", previewPic.src);
  console.log("Image alt:", previewPic.alt);

  const imageDiv = document.getElementById("image");

  imageDiv.innerHTML = previewPic.alt;
  imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
}

function undo() {
  console.log("Triggered undo");

  const imageDiv = document.getElementById("image");

  imageDiv.innerHTML = "Hover over an image below to display here.";
  imageDiv.style.backgroundImage = "url('')";
