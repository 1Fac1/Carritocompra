const btnCart = document.querySelector
('.conteiner-icon')
const conteinercarritoproducto = document.querySelector('.conteiner-carrito-producto')

btnCart.addEventListener('click', () => {
    conteinercarritoproducto.classList.toggle('hidden-carrito')
})


const cartInfo = document.querySelector('.carrito')