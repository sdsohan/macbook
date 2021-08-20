function totalPriceCalculation() {
    const basePrice = parseInt(document.getElementById('basePrice').innerText);
    const memoryCost = parseInt(document.getElementById('extraMemoryCost').innerText);
    const storageCost = parseInt(document.getElementById('extraStorageCost').innerText);
    const deliveryCost = parseInt(document.getElementById('deliveryCharge').innerText);

    const totalPrice = basePrice + memoryCost + storageCost + deliveryCost;
    document.getElementById('totalPrice').innerText = totalPrice;
    document.getElementById('finalPrice').innerText = totalPrice;
}
function promoCodeApply() {
    const promoCode = document.getElementById('promoCodeInput').value;
    if (promoCode.toLowerCase() == 'stevekaku') {
        let totalPrice = parseFloat(document.getElementById('totalPrice').innerText);
        totalPrice = totalPrice - (totalPrice * 0.20);
        document.getElementById('finalPrice').innerText = totalPrice;
    }
    document.getElementById('promoCodeInput').value = '';
}
// Memory Selection & its functionality
document.getElementById('eightGbMemory-Select').addEventListener('click', function () {
    document.getElementById('extraMemoryCost').innerText = 0;
    totalPriceCalculation();
});
document.getElementById('sixteenGbMemory-Select').addEventListener('click', function () {
    document.getElementById('extraMemoryCost').innerText = 180;
    totalPriceCalculation();
});


//Storage selection & its functionality
document.getElementById('twoFiftySix-SSD').addEventListener('click', function () {
    document.getElementById('extraStorageCost').innerText = 0;
    totalPriceCalculation();
});
document.getElementById('fiveTweleve-SSD').addEventListener('click', function () {
    document.getElementById('extraStorageCost').innerText = 100;
    totalPriceCalculation();
});
document.getElementById('oneTB-SSD').addEventListener('click', function () {
    document.getElementById('extraStorageCost').innerText = 180;
    totalPriceCalculation();
});

//Delivery Charge & it's functionality
document.getElementById('free-delivery').addEventListener('click', function () {
    document.getElementById('deliveryCharge').innerText = 0;
    totalPriceCalculation();
});
document.getElementById('emergency-delivery').addEventListener('click', function () {
    document.getElementById('deliveryCharge').innerText = 20;
    totalPriceCalculation();
});