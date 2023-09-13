const artworks = document.getElementsByClassName("thumbnail");
const docBody = document.querySelector("body");

let fullSizeImg = document.getElementsByClassName("nopacity")[0];
let bigImgFrame = document.getElementById("big-img-frame");

const arrowPanelPrev = document.getElementById("prev");
const arrowPanelNext = document.getElementById("next");

for (const picture of artworks) {
    picture.addEventListener("click", showBig);
}

// KNOWN BUG:
// enlarging artwork, then moving to another and closing the fullSizeImg removes the showBig event listener without adding it back

function galleryArrows (e) {
    // if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") {
    //     console.log("wrong event fired");
    //     return;
    // }
    const artArray = [].slice.call(artworks);
    
    //Check which image is displayed, save the array index to picture
    let picture = artArray.findIndex(img => img.src === fullSizeImg.src);

    if (e.key === "ArrowRight" || e.target.id === "next" || e.target.id === "next-arrow") {
        if (picture === 8) {
            fullSizeImg.setAttribute("src", artArray[0].src);
        } else {
            fullSizeImg.setAttribute("src", artArray[picture + 1].src);
        }
    } else if (e.key === "ArrowLeft" || e.target.id === "prev" || e.target.id === "prev-arrow") {
        if (picture === 0) {
            fullSizeImg.setAttribute("src", artArray[artworks.length - 1].src);
        } else {
            fullSizeImg.setAttribute("src", artArray[picture - 1].src);
        }
    }
}

arrowPanelNext.addEventListener("click", galleryArrows);
arrowPanelNext.lastChild.addEventListener("click", galleryArrows);
arrowPanelPrev.addEventListener("click", galleryArrows);
arrowPanelPrev.lastChild.addEventListener("click", galleryArrows);
document.addEventListener("keydown", galleryArrows);

function removeBig (e) {
    if (e.key === "Escape" || e.type === "click") {
        e.target.removeEventListener("keydown", removeBig);

        fullSizeImg.removeAttribute("id");
        bigImgFrame.style.display = "none";
    }
}

function showBig (e) {
    let imageSource = e.target.src;
    bigImgFrame.style.display = "flex";

    fullSizeImg.setAttribute("src", imageSource);
    fullSizeImg.setAttribute("id", "full-size-img");

    fullSizeImg.addEventListener("click", removeBig);
    document.addEventListener("keydown", removeBig);
}

