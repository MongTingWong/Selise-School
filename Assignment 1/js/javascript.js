var buttonlist = document.getElementsByClassName('button button3');
var cart = document.getElementById("cart");
var startcount = 0;
localStorage.clear();

for (var st = 0; st < buttonlist.length; st++) {

    var ID = buttonlist[st].id;

    document.getElementById(ID).addEventListener("click", clickFunction);
}


function clickFunction() {
    this.disabled = true;
    startcount++;

    localStorage.setItem('1', startcount);

    updateCart();
}


function updateCart() {
    var key = localStorage.key('0');

    var value = localStorage.getItem(key);

    cart.innerHTML = value;


}