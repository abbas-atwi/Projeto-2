pizzas.map((item, index)=>{
    let pizzaItem = document.querySelector(".pizza-item").cloneNode(true)

    // Adicionou key-data para cada pizza item para identificador

    document.querySelector(".pizzaArea").append(pizzaItem)
    let key = pizzaItem.setAttribute("data-key", index)
    pizzaItem.querySelector(".pizza-item--img img").src = item.img
    pizzaItem.querySelector(".pizza-item--nome h1").innerHTML = item.name 
    pizzaItem.querySelector(".pizza-tem-preco span").innerHTML = `R$ ${item.price.toFixed(2)}`
    pizzaItem.querySelector(".pizza-item--info dd").innerHTML = item.description

    // Ao clicar no elemento a , ele vai pegar as informcoes
    pizzaItem.querySelector("a").addEventListener("click",(e)=>{
        e.preventDefault()
        const el = e.target
        let n = pizzaItem.querySelector(".pizza-item--nome h1").innerHTML = item.name

        console.log(n)
    })
})


function menuBurger(){
    document.querySelector(".menuBurguer").addEventListener("click",(e)=>{
        let menu = document.querySelector(".menu")
        menu.classList.toggle("menuShow")
       setTimeout(()=>{
           menu.style.display = 'flex'
             menu.style.opacity = 1
       },100)
   
    })
}
    if(window.innerWidth == 526){
        menu.classList.remove("menuBurger")
        window.onload()
    }

menuBurger()