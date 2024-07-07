function carregar(y, x) {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas!`
    if (hora >= 0 && hora < 12) {
        // bom dia
        img.src = 'imagem/manhã.png'
        document.body.style.background = '#fcaa56'
    } else if (hora >= 12 && hora < 18) {
        // boa tarde
        img.src = 'imagem/tarde.png'
        document.body.style.background = '#cf8779'

    } else {
        // boa noite
        img.src = 'imagem/noite.png'
        document.body.style.background = '#354159'
    }
}

