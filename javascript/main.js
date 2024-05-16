function change(){
    var img = document.getElementById('intImagem');

    if(img.style.backgroundImage.includes('./imagens/biblioteca_meia_noite.jpg'))
    {
        img.style.backgroundImage = "url('./imagens/amendoas.png')";
    }
    else 
    {
        img.style.backgroundImage = "url('./imagens/biblioteca_meia_noite.jpg')"
    }
}