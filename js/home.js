const select_card_fruit=document.querySelectorAll('.home-product-item');
const nav_all_product=document.querySelector('.nav-all_product');
const nav_fruit=document.querySelector('.nav-fruit');
const nav_candy=document.querySelector('.nav-candy');
const nav_item=document.querySelector('.nav-item');
const section=document.querySelectorAll('.section h2');
const seemore=document.querySelectorAll('.seemore');
const pagination=document.querySelector('.pagination ');
const category_item=document.querySelectorAll('.category-item');
const category_list_item=document.querySelectorAll('.category-list li');

const nav_feedback=document.querySelector('.nav_feedback');
const nav_contact=document.querySelector('.nav_contact');
const item_nav_category=document.querySelector('.item-nav-category');
const nav_bar_category=document.querySelector('.nav-bar-category');
const nav_item_raucu=document.querySelector('.Nav_item_raucu');
const Nav_item_banhkeo=document.querySelector('.Nav_item_banhkeo');
const Nav_item_dodung=document.querySelector('.Nav_item_dodung');



select_card_fruit.forEach(function(ele){
    ele.addEventListener('click',function(){
        ele.href="./detailProduct.html"
    })
})




const header__cart__icon =document.querySelector(' .cart_icon_select');
header__cart__icon.addEventListener('click',function(){
    header__cart__icon.href="./cart.html";
})
item_nav_category.addEventListener('click',function(e){
    e.preventDefault();
    nav_bar_category.classList.toggle('hidden');
    console.log("a")
})

// nav_bar_category.addEventListener('blur',function(e){  
//     nav_bar_category.setAttribute('style','display:none');
// })

