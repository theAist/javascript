function carregar() {
    let msg = window.document.getElementById("msg");
    let img = window.document.getElementById("imagem");
    let data = new Date();
    let hora = data.getHours();
    let min = data.getMinutes();
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`;
    
    if (hora >= 0 && hora < 12) {
        img.src = "manha.jpg";
        document.body.style.background = "#dac495";
    } else if (hora < 18) {
        img.src = "tarde.jpg";
        document.body.style.background = "#759ea2";
    } else {
        img.src = "noite.jpg";
        document.body.style.background = "#131419";
    }
}