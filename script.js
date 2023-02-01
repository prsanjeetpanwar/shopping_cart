var product_total_amt=document.getElementById("product_total_amt");
var total_cart_amt = document.getElementById('total_cart-amt');
var Shipping_charge= document.getElementById('Shipping_charge');
const decreaseNumber = (incdec,itempri) => {
  var itemval = document.getElementById(incdec);
  var itempri = document.getElementById(itempri);
  console.log(itemval.value);
  if (itemval.value <= 0) {
    itemval.value = 0;
    alert("your cart is empty");
  } else {
    itemval.value = parseInt(itemval.value) - 1;
    itemval.style.background = "#fff";
    itemval.style.color = "#000";
    itempri.innerHTML=parseInt(itempri.innerHTML)-15;
    product_total_amt.innerHTML=parseInt(product_total_amt.innerHTML)-15;
    total_cart_amt.innerHTML=parseInt(product_total_amt.innerHTML)+ parseInt(Shipping_charge.innerHTML);
    
  }
};
const increaseNumber = (incdec,itempri) => {
  var itemval = document.getElementById(incdec);
  var itempri= document.getElementById(itempri);
  console.log(itemval.value);
  if (itemval.value >= 5) {
    itemval.value = 5;
    alert("Max 5 allowed");
    itemval.style.background = "red";
    itemval.style.color = "#fff";
  } else {
    itemval.value = parseInt(itemval.value) + 1;
    itempri.innerHTML=parseInt(itempri.innerHTML)+15;
    product_total_amt.innerHTML=parseInt(product_total_amt.innerHTML)+15;
    total_cart_amt.innerHTML=parseInt(product_total_amt.innerHTML)+ parseInt(Shipping_charge.innerHTML);

  }
};
