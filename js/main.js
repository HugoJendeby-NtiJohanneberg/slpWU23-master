let button = document.querySelector(".selector").addEventListener("click", showmenu);
let i = 0



function showmenu(){
    console.log("huh")
    let bev = document.querySelector("#beverage1");
    let bev2 = document.querySelector("#beverage2");
    let bev3 = document.querySelector("#beverage3");

    if (i == 0) {

        bev3.classList.remove("hide");
        bev2.classList.remove("hide2");
    
        bev3.classList.add("show");
        bev2.classList.add("show2");
    
        setTimeout(function() {
            bev3.classList.remove("show");
            bev2.classList.remove("show2");
    
            bev3.classList.add("hide");
            bev2.classList.add("hide2");
        }, 1000);
        
        i++;
    }
    else if (i == 1){
        
       
        bev3.classList.remove("hide");
        
        bev.classList.add("show");
        bev3.classList.add("show2");
    
        setTimeout(function() {
            bev.classList.remove("show");
            bev3.classList.remove("show2");
            bev.classList.add("hide");
            bev3.classList.add("hide2");
        }, 1000);

        i++;
    }
    else if (i == 2){
        bev.classList.remove("hide");
        bev.classList.add("show2");

        bev2.classList.remove("hide2");
        bev2.classList.add("show");

        setTimeout(function() {
            bev2.classList.remove("show");
            bev.classList.remove("show2");
            bev2.classList.add("hide");
            bev.classList.add("hide2");
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

