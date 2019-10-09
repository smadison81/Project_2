$(document).ready(function () {
    console.log("page has been loaded")

    var countItems = 0
    var cartArray = []
    // sessionStorage.clear()
    // if session storage is not clear
    if (sessionStorage.getItem('cart') != null) {
        var cartArray = JSON.parse(sessionStorage.getItem("cart"))
        var totalqty = cartArray.reduce((currentTotal, item) => {
            return item.qty + currentTotal
        }, 0)
    }

    $("#cart").html(totalqty)

    $(".order").on("click", function () {

        var buttonSelect = $(this).data("id")
        // console.log(buttonSelect)

        var qtySelected = $("#_" + buttonSelect).val().trim()
        // console.log("qty selected: " + qtySelected)

        countItems = countItems + parseInt(qtySelected)
        $("#cart").text(countItems + totalqty)

        var cart = {
            item_id: buttonSelect,
            item_name: "coffee " + buttonSelect,
            price: 35.50,
            qty: parseInt(qtySelected)
        };

        // if session storage is clear
        if (sessionStorage.getItem('cart') == null) {

            cartArray.push(cart)
            sessionStorage.setItem("cart", JSON.stringify(cartArray))
            var cartValue = sessionStorage.getItem("cart")
            var cartObj = JSON.parse(cartValue)
            // console.log(cartObj)
        } else {

            var cartObj = JSON.parse(sessionStorage.getItem("cart"))
            // check if item exist in the cart
            var itemExist = cartObj.some(el => el.item_id === cart.item_id)

            if (!itemExist) {
                console.log("new item selected push into array")
                cartArray.push(cart)
                sessionStorage.setItem("cart", JSON.stringify(cartArray))
                var cartObj = JSON.parse(sessionStorage.getItem("cart"))
            } else {
                console.log("update qty")
                for (var i = 0; i < cartObj.length; i++) {
                    // console.log(cartObj[i].item_id === cart.item_id);
                    if (cartObj[i].item_id === cart.item_id) {

                        var newQty = cartObj[i].qty + cart.qty
                        var updateCart = {
                            item_id: buttonSelect,
                            item_name: "coffee " + buttonSelect,
                            price: 35.50,
                            qty: newQty
                        }
                        cartArray[i] = updateCart
                        // console.log(cartObj)
                        sessionStorage.setItem("cart", JSON.stringify(cartArray))

                    }


                }

            }
        }

    })
})