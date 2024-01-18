function rodar(){
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    
    // Para setar o valor desejado da hora caso não queira receber esse valor do sistema
    //var hora = 17
   
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`

    if( hora >= 0 && hora < 12){
        imagem.src ='manha.png' 
        document.body.style.background = '#a7943f'
        document.p = 'Bom dia'
    }
    else if( hora >=12 && hora <= 18){
        imagem.src = 'tarde.png'
        document.body.style.background = '#4b9170'
        document.p = 'Boa tarde'

    }
    else{
        imagem.src = 'noite.png'
        document.body.style.background = '#2e2e3a'
        document.p = 'Boa noite'
    }
}
