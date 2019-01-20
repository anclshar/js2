var basket = [{item: "Синтезатор", itemPrice: 12000},{item: "Педаль", itemPrice: 1500}]
var basketPrice = 0
basket.pop({item: "Стойка", itemPrice: 1700})
function countBasketPrice(p) {
    for (var i = 0; i < basket.length; i++) {
        basketPrice = basketPrice + basket[i].itemPrice
    }
    return basketPrice
}
for (i = 0; i < basket.length; i++) {
    console.log(basket[2].item + " " + basket[2].itemPrice)
}
console.log("Общая стоимость:" + " " + basketPrice)