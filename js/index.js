const abasMenu = document.querySelectorAll('a')
const abas = document.querySelectorAll('.abas')
const menu = document.querySelectorAll('.menu')

menu.forEach((aba,index)=>{  
    aba.addEventListener('click', ()=>{
        const abaClicada = document.querySelector('.selecionado') // Pego no menu o elemento que possui a classe selecionado
        abaClicada.classList.remove('selecionado') //removo a classe

        const abaMostrada = document.querySelector('.mostrar') // Pego no menu o elemento que possui a classe mostrar das abas
        abaMostrada.classList.remove('mostrar') //removo a classe

        aba.classList.toggle("selecionado"); //Na próxima aba do menu já adiciono a class selecionado
        abas[index].classList.toggle("mostrar"); //Na próxima seção adiciono a classe mostrar, baseado no índice
    })
})






