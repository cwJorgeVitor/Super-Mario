const botaoTrailer = document.querySelector('.botao-trailer');
const modal = document.querySelector('.modal');
const video = document.getElementById("video");
const linkDoVideo = video.src;
const botaoFechar = document.querySelector('.fechar-modal');

function alternarModal(){
    modal.classList.toggle("aberto")
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});

botaoFechar.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});


