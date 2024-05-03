function addToCart(productName) {
            alert(productName + " added to cart!");
        }
function buyNow(productName) {
    var confirmBuy = confirm("Do you want to buy " + productName + " now?");
    if (confirmBuy) {
		var nameUser = prompt("Please enter the receiver's name:");
        var paymentMethod = prompt("Please enter your payment method (e.g., credit card, PayPal):");
        var shippingAddress = prompt("Please enter your shipping address:");
         alert("Thank you for your purchase!");
	  window.location.href = "index.html";
    }
}
