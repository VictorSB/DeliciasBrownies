const abasMenu = document.querySelectorAll('a')
const abas = document.querySelectorAll('.abas')


abasMenu.forEach(function () {
    menu.addEventListener("click", function() {
        
        esconderCardapio()

    })
})



function esconderCardapio() {
    const cardapio = document.querySelector('.mostrar')
    if (cardapio) {
        cardapio.classList.remove('mostrar')
    }
    menu.classList.add('mostrar')
}