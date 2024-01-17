function carregar(){
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementsById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas.`
    if( hora >= 0 && hora < 12){
        img.src ='manhã.png' 
        document.body.style.background = '#a7943f'
    }
    else if( hora >=12 && hora <= 18){
        img.src = 'tarde.png'
        document.body.style.background = '#397e3f '
    }
    else{
        img.src = 'noite.png'
        document.body.style.background = '#ce7368'
    }
}
