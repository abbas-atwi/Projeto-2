pizzas.map((item, index)=>{
    let pizzaItem = document.querySelector(".pizza-item").cloneNode(true)
    document.querySelector(".pizzaArea").append(pizzaItem)
    pizzaItem.querySelector(".pizza-item--img img").src = item.img
    pizzaItem.querySelector(".pizza-item--nome h1").innerHTML = item.name 
    pizzaItem.querySelector(".pizza-item--info dd").innerHTML = item.description
})

function menuBurger(){
    document.querySelector(".menuBurguer").addEventListener("click",(e)=>{
        document.querySelector(".menu").classList.toggle("menuShow")
   
    })
}

menuBurger()