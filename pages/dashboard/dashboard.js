/*Sidebar Js*/
let btn = document.querySelector("#menu");
let sidebar = document.querySelector(".sidebar");
let home = document.querySelector(".home_section")

btn.onclick = function(){
    sidebar.classList.toggle("active");    
    home.classList.toggle("active");
}
