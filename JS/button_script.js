const revealButton = document.getElementById("reveal-button");
const inDepth = document.getElementById("in-depth");

function toggleInfo() {
    if (inDepth.style.display == "block") {
        inDepth.style.display = "none";
        revealButton.innerHTML = "Reveal ↓";
        revealButton.style.marginBottom = "1.25rem";
    } else {
        revealButton.style.marginBottom = "0";
        inDepth.style.display = "block";
        revealButton.innerHTML = "Hide ↑";
    };
};

revealButton.addEventListener("click", toggleInfo);