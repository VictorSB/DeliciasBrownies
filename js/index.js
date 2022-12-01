const abasMenu = document.querySelectorAll('a')
const abas = document.querySelectorAll('.abas')

abasMenu.forEach(function (menu, index) {
    menu.addEventListener("click", function () {

        const esconderCardapio = document.querySelector('.mostrar')
        if (esconderCardapio) {
            esconderCardapio.classList.remove('mostrar')
        } 
        abas[index].classList.add('mostrar') 
    })
})
