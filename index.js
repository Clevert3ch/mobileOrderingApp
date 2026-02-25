import {menuArray} from './data.js'

const menuContainer = document.getElementById("menu")

// renders out the menu.
function getMenuHtml() {
    return menuArray.map(item => {
           return `
      <div class="menu-item">
        <div class="item-left">
          <span class="emoji">${item.emoji}</span>
          <div>
            <h3>${item.name}</h3>
            <p class="ingredients">${item.ingredients.join(", ")}</p>
            <p class="price">$${item.price}</p>
          </div>
        </div>
        <button class="add-btn" data-id="${item.id}">+</button>
      </div>
    `
    }).join("")
}


//Empty array for the order when added.
let order = []

document.addEventListener("click", function(e) {
    
    // ADD ITEM.
    const addBtn = e.target.closest(".add-btn")
    if (addBtn) {

        const itemId = Number(addBtn.dataset.id)

        const selectedItem = menuArray.find(item => item.id === itemId)

        order.push(selectedItem)
        renderOrder()
    }

    //REMOVE ITEM.
    const removeBtn = e.target.closest(".remove-btn")
    if (removeBtn) {
        const index = Number(removeBtn.dataset.index)

        order.splice(index, 1)
        renderOrder()
    }
    
    //payment popup when complete button is clicked.
    if (e.target.classList.contains("complete-btn")) {
        document.getElementById("modal").classList.remove("hidden")
    }
})

//Renders out the order that has been added to the order array.
function renderOrder() {
    const orderContainer = document.getElementById("order-container")

    if(!orderContainer) return

    if (order.length === 0) {
        orderContainer.innerHTML = ""
        return
    }

    let totalPrice = 0
    
    // Iterates over the new Order aray and creates HTML 
    const orderItemsHtml = order.map((item, index) => {
        totalPrice += item.price
        return `
    <div class="order-item">
    <div class="left">
        <span>${item.name}</span>
        <button class="remove-btn" data-index="${index}">remove</button>
    </div>
        <span class="price">$${item.price}</span>
    </div>
    `
    }).join("")
    // This renders the Html to the site via innerHTML.
    orderContainer.innerHTML =`
    <h2>Your order:</h2>
    ${orderItemsHtml}
    <hr>
    <div class="total">
      <span>Total price:</span>
      <span>$${totalPrice}</span>
    </div>
    <button class="complete-btn">Complete order</button>
  `
}

// payment input box/container
document.getElementById("payment-form").addEventListener("submit",function(e){
    e.preventDefault()

    const name = document.getElementById("name").value

    //hide modal
    document.getElementById("modal").classList.add("hidden")

    //thank msg
    document.getElementById("order-container").innerHTML = `
    <div class="thank-you">
        <h2>Thanks, ${name}! Your order is on its way!</h2>
    </div>
    `

   //clear order
   let Order = []
})




menuContainer.innerHTML = getMenuHtml()