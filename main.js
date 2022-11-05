"use strict"

const listaFotos = document.querySelectorAll('.conteudo__fotos_secundaria');
const fotoPrincipal = document.querySelector('.conteudo__fotos_principal');
const listaFotosModal = document.querySelectorAll('.modal__fotos_secundaria');
const fotoPrincipalModal = document.querySelector('.modal__fotos_principal');
const botaoDiminuirQtd = document.querySelector('.conteudo__info_botao_qtd_diminui')
const botaoAumentaQtd = document.querySelector('.conteudo__info_botao_qtd_aumenta')
const botaoUsuarioCart = document.querySelector('.menu__usuario_cart_container')
const setaFotosModalDireita = document.querySelector('.modal__fotos_seta--direita');
const setaFotosModalEsquerda = document.querySelector('.modal__fotos_seta--esquerda');
const botaoFecharModal = document.querySelector('.modal__fechar')

function trocaImagemPrincipal (id) {    

    for (let index = 0; index < listaFotos.length; index++) {

        const foto = listaFotos[index];    

        if (foto.classList.contains('ativo')) {
            foto.classList.remove('ativo');    
        }      

        if (index == id) {            
            foto.classList.add('ativo');
        }                     
    }

    fotoPrincipal.src = `images/image-product-${parseInt(id) + 1}.jpg`;
    fotoPrincipal.id = parseInt(id);    
}

function trocaImagemPrincipalModal (id) {    

    for (let index = 0; index < listaFotosModal.length; index++) {

        const fotoModal = listaFotosModal[index];    

        if (fotoModal.classList.contains('ativo')) {
            fotoModal.classList.remove('ativo');    
        }      

        if (index == id) {            
            fotoModal.classList.add('ativo');
        }                     
    }

    fotoPrincipalModal.src = `images/image-product-${parseInt(id) + 1}.jpg`;
    fotoPrincipalModal.id = parseInt(id);
}

function expandeFoto () {
    document.querySelector(".modal").classList.toggle("show-modal");   

    let id = parseInt(fotoPrincipal.id);                 

    trocaImagemPrincipalModal(id);    
}

function alteraQuantidade(tipo) {

    const botaoQtd = document.querySelector('.conteudo__info_botao_qtd')        
    const qtd = botaoQtd.innerHTML;

    if (tipo == 'diminui') {        
      if ((parseInt(qtd) - 1) >= 0)
        botaoQtd.innerHTML = parseInt(qtd) - 1;  
    } else {
      botaoQtd.innerHTML = parseInt(qtd) + 1;
    }
}

function mostraCart () {
    document.querySelector(".cart").classList.toggle("invisivel");  
}

for (let index = 0; index < listaFotos.length; index++) {

    const foto = listaFotos[index];    

    foto.onclick = function () {
        trocaImagemPrincipal(foto.id); 
    }
}

for (let index = 0; index < listaFotosModal.length; index++) {

    const fotoModal = listaFotosModal[index];    

    fotoModal.onclick = function () {
        trocaImagemPrincipalModal(fotoModal.id); 
    }
}

fotoPrincipal.onclick = function () {
    expandeFoto();
}

botaoDiminuirQtd.onclick = function () {
    alteraQuantidade('diminui')
}

botaoAumentaQtd.onclick = function () {
    alteraQuantidade('aumenta')
}

botaoUsuarioCart.onclick = function () {
    mostraCart();
} 

botaoFecharModal.onclick = function () {
    expandeFoto();    
}

botaoFecharModal.addEventListener('mouseover', (event) => {
    if (event.target === botaoFecharModal) {        
        botaoFecharModal.classList.toggle('modal__botao_ativo');         
    }
});

botaoFecharModal.addEventListener('mouseout', (event) => {
    if (event.target === botaoFecharModal) {        
        botaoFecharModal.classList.toggle('modal__botao_ativo');         
    }
});

setaFotosModalEsquerda.addEventListener('mouseover', (event) => {
    if (event.target === setaFotosModalEsquerda) {        
        document.querySelector('.modal__fotos_seta_img--esquerda').classList.toggle('modal__botao_ativo');                 
    }
});

setaFotosModalEsquerda.addEventListener('mouseout', (event) => {
    if (event.target === setaFotosModalEsquerda) {        
        document.querySelector('.modal__fotos_seta_img--esquerda').classList.toggle('modal__botao_ativo');                 
    }
});

setaFotosModalDireita.addEventListener('mouseover', (event) => {
    if (event.target === setaFotosModalDireita) {        
        document.querySelector('.modal__fotos_seta_img--direita').classList.toggle('modal__botao_ativo');                 
    }
});

setaFotosModalDireita.addEventListener('mouseout', (event) => {
    if (event.target === setaFotosModalDireita) {        
        document.querySelector('.modal__fotos_seta_img--direita').classList.toggle('modal__botao_ativo');                 
    }
});

window.addEventListener("click", function(event) {
    if (event.target === document.querySelector(".modal")) {        
        expandeFoto();
    }
});

setaFotosModalDireita.onclick = function () {    
    let id = parseInt(fotoPrincipalModal.id) + parseInt(1);      

    if (id > 3 ) {
        id = 0
    }    

    trocaImagemPrincipalModal(id);    
}

setaFotosModalEsquerda.onclick = function () {    
    let id = parseInt(fotoPrincipalModal.id) - parseInt(1);                                          

    if (id < 0 ) {
        id = 3
    }        

    trocaImagemPrincipalModal(id);    
}
