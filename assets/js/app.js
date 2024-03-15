const buttonWrap = document.querySelector("#btnWrap");
const preloader = document.querySelector("#preloader");
const enterbutton = document.querySelector("#enterBtn");
const welcomeVideo = document.querySelector("#welcomeVideo");


if (preloader) {
    const bgSound = new Audio("./assets/bgSound.mp3")
    enterbutton.addEventListener("click", () => {
        buttonWrap.classList.add("hide");
        welcomeVideo.play();
    })

    welcomeVideo.addEventListener("ended", () => {
        preloader.classList.add("hide");
        bgSound.play();
    })

}

window.onload = () => {

    if (enterbutton) {
        enterbutton.textContent = "ENTER THE ANALGANG"
    }

    const styleBoxes = () => {

        Array(8).fill(0).forEach((_, i) => {
            const box = document.getElementById(`box${i + 1}`);

            if (box) {
                const area = document.getElementById(`area${i + 1}`);

                const coords = area.coords.split(",");

                box.style.width = (Math.abs(coords[0] - coords[2])) + "px"
                box.style.height = (Math.abs(coords[1] - coords[3])) + "px"
                box.style.left = Number(coords[0]) + "px"
                box.style.top = Number(coords[1]) + "px"
            }
        });

    }

    setInterval(() => {
        styleBoxes();
    }, 500)

}