var boxgiasu = document.getElementById("giasu");
var boxhocvien = document.getElementById("hocvien");
var btngiasu = document.getElementById("btngiasu");
var btnhocvien = document.getElementById("btnhocvien");

function giasu() {
    boxhocvien.style.display = "none";
    boxgiasu.style.display = "block";
    btnhocvien.classList.remove("active");
    btngiasu.classList.add("active");
}

function hocvien() {
    boxgiasu.style.display = "none";
    boxhocvien.style.display = "block";
    btnhocvien.classList.add("active");
    btngiasu.classList.remove("active");
}