//====================== menu đổi màu ============================//
// window.onscroll = function() {
//     myFunction()
// };

// function myFunction() {

//     if (document.body.scrollTop == 0 || document.documentElement.scrollTop == 0) {
//         document.getElementById("bg__banner").className = "bg__banner2";
//     } else {
//         document.getElementById("bg__banner").className = "bg__banner2";
//     }
//     //đổi màu icon navbar mobile nếu height = 0
//     if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
//         document.querySelector('.navbar__icon i').style.color = 'white';
//     }

// }
// //đổi màu icon navbar mobile nếu height = 0
// if (document.body.scrollTop === 0 || document.documentElement.scrollTop === 0) {
//     document.querySelector('.navbar__icon i').style.color = 'black';
// }

//====================== menu đổi màu ============================//
// navbar
var navbarmb = document.getElementById("navbarmb");
var navbaric = document.getElementById("navbaric");
var navbarrg = document.getElementById("navbarrg");
var nboff = document.getElementById("navmb__off");
navbaric.addEventListener("click", shownav);
navbarrg.addEventListener("click", hidenav);
nboff.addEventListener("click", offnav);

function shownav() {
    if ((navbarmb.style.transform = "translateX(100%)")) {
        navbarmb.style.transform = "translateX(0%)";
        navbarrg.style.display = "block";
        navbaric.style.float = "right";
        nboff.style.display = "block";
    }
}

function hidenav() {
    navbarmb.style.transform = "translateX(100%)";
    navbarrg.style.display = "none";
}

function offnav() {
    navbarmb.style.transform = "translateX(100%)";
    navbarrg.style.display = "none";
}
// navbar


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

//sửa lại học viên

// menu xem them

var menuxemthem = document.querySelector('.navmb__xemthem');
var clickxemthemmb = document.querySelector('#clickxemthemmb');
clickxemthemmb.addEventListener('click', hienxemthem);

function hienxemthem() {
    if (menuxemthem.style.display === 'block') {
        menuxemthem.style.display = 'none';
    } else {
        menuxemthem.style.display = 'block';
    }
}
// menu xem them