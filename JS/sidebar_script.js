// web animations hopefully

const sideSquare = document.getElementById("sidebar-square");
const rectangleArray = document.getElementsByClassName("rectangle");
const [a, b, c] = rectangleArray;

const recFlex = document.getElementById("rectangle-flex");
const sidebar = document.getElementById("sidebar");
const slidingDoor = document.getElementById("slidingdoor");


const brown = "hsl(12 75% 20% / 1)";
const lightOrange = "hsl(16 30% 85% / 1)";
const orangered = "hsl(16 100% 50% / 1)";
const whiteOrange = "hsl(16 5% 95% / 1)";

// commented out while experimenting with turning rectangles to circles
// comment out the other functions, and un-comment these functions to see the alternative animation
/* 
function rectRotate() {
    let id = null;
    let pos = 0;
    let whiteGrey = 255;
    clearInterval(id);
    id = setInterval(frame, 2);
    
    function frame() {
        if (pos === -90) {
            clearInterval(id);
        } else {
            whiteGrey--;
            pos--;
            a.style.transform = "rotate("+ pos + "deg)" + "translateX("+ (pos * 0.15833).toFixed(2) + "px)" + " translateY(" + (pos * -0.1666).toFixed(0)+"px)";
            b.style.transform = "rotate("+ pos + "deg)";
            c.style.transform = "rotate("+ pos + "deg) translateX("+ (pos * -0.15833).toFixed(2) + "px)" + " translateY(" + (pos * 0.1555).toFixed(0)+"px)";

            a.style.backgroundColor = `rgb(${whiteGrey} ${whiteGrey} ${whiteGrey})`;
            b.style.backgroundColor = `rgb(${whiteGrey} ${whiteGrey} ${whiteGrey})`;
            c.style.backgroundColor = `rgb(${whiteGrey} ${whiteGrey} ${whiteGrey})`;
            
            sideSquare.style.backgroundColor = `rgb(${165 + pos} ${165 + pos} ${165 + pos})`;
            // sideSquare.style.transform = "rotate("+ pos + "deg)";
        };
    };
    sidebar.style.display = "block";
    slidingDoor.style.display = "block";
    sideSquare.removeEventListener("click", rectRotate);
    sideSquare.addEventListener("click", rectRotateReverse);
};

function rectRotateReverse() {
    let id = null;
    let pos = -90;
    let whiteGrey = 165;
    clearInterval(id);
    id = setInterval(frame, 2);

    function frame() {
        if (pos === 0) {
            clearInterval(id);
        } else {
            pos++;
            whiteGrey++;

            a.style.transform = "rotate("+ pos + "deg) translateX("+ (pos * 0.15833).toFixed(2) + "px)" + " translateY(" + (pos * -0.1666).toFixed(0)+"px)";
            b.style.transform = "rotate("+ pos + "deg)";
            c.style.transform = "rotate("+ pos + "deg) translateX("+ (pos * -0.15833).toFixed(2) + "px)" + " translateY(" + (pos * 0.1555).toFixed(0)+"px)";

            a.style.width = `${pos / -3}px`;
            b.style.width = `${pos / -3}px`;
            c.style.width = `${pos / -3}px`;
            
            a.style.backgroundColor = `rgb(${whiteGrey} ${whiteGrey} ${whiteGrey})`;
            b.style.backgroundColor = `rgb(${whiteGrey} ${whiteGrey} ${whiteGrey})`;
            c.style.backgroundColor = `rgb(${whiteGrey} ${whiteGrey} ${whiteGrey})`;
            sideSquare.style.backgroundColor = `rgb(${165 + pos} ${165 + pos} ${165 + pos})`;
            // sideSquare.style.transform = "rotate("+ pos + "deg)";
        };
    };
    slidingDoor.style.display = "none";
    sidebar.style.display = "none";
    sideSquare.removeEventListener("click", rectRotateReverse);
    sideSquare.addEventListener("click", rectRotate);
};
*/

function sidebarShow() {
    sidebar.style.transitionTimingFunction = "ease-out";
    
    sideSquare.style.backgroundColor = brown;

    recFlex.style.transform = "rotate(-90deg)";
    
    a.style.width = `6px`;
    b.style.width = `6px`;
    c.style.width = `6px`;

    a.style.backgroundColor = lightOrange;
    b.style.backgroundColor = lightOrange;
    c.style.backgroundColor = lightOrange;

    
    sidebar.style.display = "block";
    window.visualViewport.width >= 425 ?
    sidebar.style.width = "35%" :
    sidebar.style.width = "50%";

    slidingDoor.style.display = "block";

    sidebar.style.borderLeft = `double ${orangered} 0.5rem`;

    sideSquare.removeEventListener("click", sidebarShow);
    sideSquare.addEventListener("click", sidebarHide);
};

function sidebarHide() {
    sidebar.style.transitionTimingFunction = "cubic-bezier(0.6, -0.28, 0.74, 0.05)";
    
    sideSquare.style.backgroundColor = orangered;

    recFlex.style.transform = "rotate(0deg)";

    a.style.backgroundColor = whiteOrange;
    b.style.backgroundColor = whiteOrange;
    c.style.backgroundColor = whiteOrange;

    a.style.width = `30px`;
    b.style.width = `30px`;
    c.style.width = `30px`;

    
    sidebar.style.width = "0%";
    slidingDoor.style.display = "none";

    let hideAfterAnimation = setInterval(() => {
        sidebar.style.display = "none";
        clearInterval(hideAfterAnimation);
    },165)

    sideSquare.removeEventListener("click", sidebarHide);
    sideSquare.addEventListener("click", sidebarShow);
};

sideSquare.addEventListener("click",sidebarShow);
slidingDoor.addEventListener("click",sidebarHide);