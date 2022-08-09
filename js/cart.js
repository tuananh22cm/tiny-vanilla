const deleteProduct=document.querySelectorAll('tbody i');

deleteProduct.forEach(function(ele){
    ele.addEventListener('click',function(){
        confirm('Ban co muon xoa san pham nay ');
    })
})

