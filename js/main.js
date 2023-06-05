let button = document.querySelector(".selector").addEventListener("click", showmenu);
let i = 0
let porridge = document.querySelector("#porridge");
let milkshake = document.querySelector("#sirupdrink");
let beans = document.querySelector("#beans");
milkshake.classList.add("disnone");
beans.classList.add("disnone");

product2.classList.add("disnone");
product3.classList.add("disnone");

function showmenu(){
    console.log("huh")
    let bev = document.querySelector("#beverage1");
    let bev2 = document.querySelector("#beverage2");
    let bev3 = document.querySelector("#beverage3");

    if (i == 0) {

        
        bev2.classList.remove("hide2");
    
        bev3.classList.add("show");
        bev2.classList.add("show2");
        bev.classList.add("show2");

        porridge.classList.add("disnone");
        milkshake.classList.add("dis");
        product2.classList.add("dis");
        product1.classList.add("disnone");
    
        setTimeout(function() {
            bev3.classList.remove("show");
            bev2.classList.remove("show2");
            bev.classList.remove("show2");
    
            bev3.classList.add("hide");
            bev2.classList.add("hide2");
            bev.classList.add("slightshift");
        }, 1000);
        
        i++;
    }
    else if (i == 1){
        
        bev.classList.remove("slightshift");
        bev3.classList.remove("hide");
        bev2.classList.remove("hide2");
        
        bev.classList.add("show");
        bev2.classList.add("show3");
        bev3.classList.add("show2");
        

        milkshake.classList.remove("dis");
        beans.classList.add("dis");
        product3.classList.add("dis");
        product2.classList.remove("dis");
    
        setTimeout(function() {
            bev.classList.remove("show");
            bev2.classList.remove("show3");
            bev3.classList.remove("show2");
            

            bev.classList.add("hide");
            bev2.classList.add("slightshift");
            bev3.classList.add("hide2");

        }, 1000);

        i++;
    }
    else if (i == 2){
        bev.classList.remove("hide");
        bev2.classList.remove("slightshift");
        bev3.classList.remove("hide2");

        bev.classList.add("show2");
        bev2.classList.add("show");
        bev3.classList.add("show2")

        beans.classList.remove("dis");
        product3.classList.remove("dis");
        product1.classList.remove("disnone");
        porridge.classList.remove("disnone");


        setTimeout(function() {
            bev.classList.remove("show2");
            bev2.classList.remove("show");
            bev3.classList.remove("show2");
            

            bev.classList.add("hide2");
            bev2.classList.add("hide");
            bev3.classList.add("hide2");
            
        }, 1000);

        
        setTimeout(function() {
            bev.classList.remove("hide2");
            bev2.classList.remove("hide");
            bev3.classList.remove("hide2");


        }, 2000);

        i = 0
    }
    
    console.log(i)
}

