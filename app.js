pizzas.map((item, index)=>{
    let pizzaItem = document.querySelector(".pizza-item").cloneNode(true)
    document.querySelector(".pizzaArea").append(pizzaItem)
    pizzaItem.querySelector(".pizza-item--img img").src = item[index].img
})