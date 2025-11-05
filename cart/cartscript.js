
fetch(`http://localhost:3000/cart`)
.then(response => response.json())
.then(cart => {

    for (let i=0; i<cart.data.length; i++) {
        console.log("hello")
        document.querySelector("#cart").innerHTML += `
            <div class="trip">
                <div class="city">
                    <div class="element">${cart.data[i].departure}</div>
                    <span class="element">></span>
                    <div class="element">${cart.data[i].arrival}</div>
                </div>
                <div>${cart.data[i].date}</div>
                <div>${cart.data[i].price}</div>
                <button type="delete" id="delete-button">x</button>
            </div>`
    }
})