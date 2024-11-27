//  Start Global ------>>>>>>>>>>

let myImgs = Array.from(document.querySelectorAll(".item img"));
let lightContainer = document.querySelector(".light-container");
let boxModal = document.querySelector(".box");
let close = document.getElementById("close");
let next = document.getElementById("next");
let previous = document.getElementById("prev");
let index;

for (let i = 0; i < myImgs.length; i++) {
  myImgs[i].addEventListener("click", function (e) {
    index = myImgs.indexOf(e.target);
    console.log(index);

    let currentSrc = e.target.getAttribute("src");

    lightContainer.classList.remove("d-none");

    boxModal.style.backgroundImage = `url('${currentSrc}')`;
  });
}

// Events ------->>>>>>>>>
close.addEventListener("click", function () {
  closeSlide();
});

next.addEventListener("click", function () {
  slide(1);
});

previous.addEventListener("click", function () {
  slide(-1);
});

document.addEventListener("click", function (e) {
  if (e.target == lightContainer) {
    closeSlide();
  }
});

document.addEventListener("keydown", function (e) {
  if (!lightContainer.classList.contains("d-none")) {
    if (e.key == "ArrowRight") {
      slide(1);
    } else if (e.key == "ArrowLeft") {
      slide(-1);
    } else if (e.key == "Escape") {
      closeSlide();
    }
  }
});

// Functions ------>>>>>>>>>>>

function slide(step) {
  index += step;

  if (index == myImgs.length) {
    index = 0;
  } else if (index < 0) {
    index = myImgs.length - 1;
  }

  let currentSrc = myImgs[index].getAttribute("src");
  boxModal.style.backgroundImage = `url('${currentSrc}')`;
}

function closeSlide() {
  lightContainer.classList.add("d-none");
}
