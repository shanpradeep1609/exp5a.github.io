document.addEventListener("DOMContentLoaded",function(){
    const productsList=document.getElementById("productsList");

    const products=[
        {name:"MIKE Running Shoes",price:"$349",image:"https://img.freepik.com/free-photo/pair-trainers_144627-3800.jpg"},
        {name:"JUMPER SHOE",price:"$299",image:"https://img.etimg.com/thumb/width-1200,height-900,imgsize-77978,resizemode-75,msid-95892008/top-trending-products/lifestyle/check-out-casual-shoes-for-men-in-india.jpg"},
        {name:"RODEO",price:"$199",image:"https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2hvZXN8ZW58MHx8MHx8fDA%3D&w=1000&q=80"},
        {name:"BROWN FOX",price:"$119",image:"https://img.etimg.com/thumb/width-1200,height-900,imgsize-77978,resizemode-75,msid-95892008/top-trending-products/lifestyle/check-out-casual-shoes-for-men-in-india.jpg"},
        {name:"BACAN WHITE",price:"$159",image:"https://assetscdn1.paytm.com/images/catalog/product/F/FO/FOONIKE-MEN-S-BSMAR26297162C52D6/1563337416841_0..jpg?imwidth=540&impolicy=hq"},
        {name:"NIKE",price:"$1999",image:"https://images.meesho.com/images/products/44009963/kxwus_512.jpg"},

    ];
    products.forEach((product)=>{
        const productElement=document.createElement("div");
        productElement.className="product";

        const imageElement=document.createElement("img");
        imageElement.src=product.image;
        imageElement.alt=product.name;

        imageElement.style.width = "300px";
        imageElement.style.height = "200px";

        const nameElement=document.createElement("h3");
        nameElement.textContent=product.name;
        const priceElement=document.createElement("p");
        priceElement.textContent=product.price;

        productElement.appendChild(imageElement);
        productElement.appendChild(nameElement);
        productElement.appendChild(priceElement);

        productsList.appendChild(productElement);
    });
        const scrollToProductsLink=document.getElementById("scrollToProducts");
        const featuredProducts=document.getElementById("featuredProducts");

        scrollToProductsLink.addEventListener("click",function(event){
            event.preventDefault();
            featuredProducts.scrollIntoView({behavior:"smooth"});
        });
 });