function update_total() {
    let sell_prices = document.getElementsByClassName('sell-price');
    let quantities = document.getElementsByClassName('num');
    let total_cost = document.getElementById('total-cost');
    let shipping = document.getElementById('shipping');
    let amt = 0;
    for (let i = 0; i < sell_prices.length; i++) 
        amt += (parseFloat(sell_prices[i].innerText.split('$')[1]) * parseFloat(quantities[i].innerText) );
    amt += parseFloat(shipping.innerText.split('$')[1]);
    total_cost.innerText = '$' + amt;
}

Array.from(document.getElementsByClassName('quantity')).forEach(element => {
    element.getElementsByClassName('minus')[0].addEventListener('click', function() {
        let num = element.getElementsByClassName('num')[0];
        if (num.innerText == '1') return;
        num.innerText = parseInt(num.innerText) - 1;
        update_total();
    });
    element.getElementsByClassName('plus')[0].addEventListener('click', function() {
        let num = element.getElementsByClassName('num')[0];
        if (num.innerText == '20') return;
        num.innerText = parseInt(num.innerText) + 1;
        update_total();
    });
});