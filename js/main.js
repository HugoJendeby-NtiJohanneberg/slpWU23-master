let button = document.querySelector(".selector").addEventListener("click", showmenu);


function showmenu(){
    console.log("huh")
    let bev = document.querySelector("#beverage1");
    bev.classList.toggle("show");

    let bev2 = document.querySelector("#beverage2");
    bev2.classList.toggle("show2");

}