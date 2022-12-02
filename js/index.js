const abasMenu = document.querySelectorAll('a')
const abas = document.querySelectorAll('.abas')
const menu = document.querySelectorAll('.menu')

abasMenu.forEach(function (menu, index) {
    menu.addEventListener("click", function () {

        const esconderCardapio = document.querySelector('.mostrar')
        if (esconderCardapio) {
            esconderCardapio.classList.remove('mostrar')
        }
        abas[index].classList.add('mostrar')
    })
})

menu.forEach(function (selecionado) {
    selecionado.addEventListener('click', function () {
        const menuSelecionado = document.querySelector('.selecionado')
        if (menuSelecionado) {
            menuSelecionado.classList.remove('selecionado')
        }
        selecionado.classList.add('selecionado')


    })
})




