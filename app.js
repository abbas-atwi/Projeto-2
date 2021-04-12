pizzas.map((item, index)=>{
    let pizzaItem = document.querySelector(".pizza-item").cloneNode(true)
    document.querySelector(".pizzaArea").append(pizzaItem)
    pizzaItem.querySelector(".pizza-item--img img").src = item.img
    pizzaItem.querySelector(".pizza-item--nome h1").innerHTML = item.name 
})