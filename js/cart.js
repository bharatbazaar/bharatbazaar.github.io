/*ALGORITHM 1 ( for displaying a special div if cart is empty or hiding it if cart is not empty)
 if (cart==empty)
 {
 .product-conatiner{
 display:none;
 }
 .message-conatiner{
 display:block;
 }
 }
 else
 {
 .product-conatiner{
 display:block;
 }
 .message-conatiner{
 display:none;
 }
 }
 ALGORITHM 2 ( for adding Rs. 50/- as a delivery charge if total amount is less than or equal to 499 and displaying class .delivery-charge)
 if(total>499)
 {
  .delivery-charge{
  display:none;
  }
 }
 else
 {
 total=total+50;
   .delivery-charge{
  display:block;
  }
 }
  * /
 /*BactToTop Coding*/
document.addEventListener("DOMContentLoaded", function () {
    const backtotop = document.getElementById("back-to-top-btn");
    backtotop.style.display = "none";
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backtotop.style.display = "block";
        } else {
            backtotop.style.display = "none";
        }
    });

    backtotop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
