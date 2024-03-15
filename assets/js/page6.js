window.onload = () => {
    const aud1 = document.querySelector("#aud1");
    const aud2 = document.querySelector("#aud2");
    const aud3 = document.querySelector("#aud3");
    const aud4 = document.querySelector("#aud4");
    const aud5 = document.querySelector("#aud5");
    const aud6 = document.querySelector("#aud6");
    const aud7 = document.querySelector("#aud7");

    const sounds = [aud1, aud2, aud3, aud4, aud5, aud6, aud7];

    let nextPlay = 0;
    let maxPlay = 6;

    const overlay = document.querySelector("#overlay");

    const playNext = async () => {
        sounds.forEach(async s => {
            await s.pause();
            s.currentTime = 0;
        })
        await sounds[nextPlay].play();
        if (nextPlay === maxPlay) {
            nextPlay = 0;
            return;
        }
        nextPlay++;
    }

    overlay.addEventListener("click", playNext);

}