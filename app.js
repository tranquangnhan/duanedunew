var kichthuoc = document.getElementsByClassName("slide")[0].clientWidth;
var chuyenSlide = document.getElementsByClassName("chuyen-slide")[0]; // lấy kích thức tất cả ảnh
var maxlength = document.querySelectorAll(".chuyen-slide__boximg"); //tìm kích thước lớn nhất
var max = kichthuoc * maxlength.length;
max -= kichthuoc;
var chuyen = 0;

function tiep() {
    if (chuyen < max) {
        chuyen += kichthuoc;
    } else chuyen = 0;
    chuyenSlide.style.marginLeft = "-" + chuyen + "px";
}

function lui() {
    if (chuyen == 0) {
        chuyen = max;
    } else {
        chuyen -= kichthuoc;
    }
    chuyenSlide.style.marginLeft = "-" + chuyen + "px";
}
setInterval("tiep()", 3000);

if (kichthuoc < 769) {
    var respon = document.querySelector(".chuyen-slide__boximg");
    var respon2 = document.querySelector(".text-banner2");
    respon.style.width = kichthuoc + "px";
    respon2.style.width = kichthuoc + "px";
}



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

// code slideTogger
var body = document.querySelector("body");
var btnxemthem1 = document.querySelectorAll(".btnxemthem1");
var boxsd1 = document.querySelectorAll(".box-sd1");
var contenttext1 = document.querySelectorAll(".cttext1");
var content = document.querySelector(".content");
var contentshawdown = document.querySelector("#boxxt2");
var contenttext2 = document.querySelector("#cttext2");
var xemthembtn = document.getElementsByClassName('xemthem');
for (let i = 0; i < btnxemthem1.length; i++) {
    btnxemthem1[i].addEventListener("click", slidedown1);

    function slidedown1() {
        if (
            boxsd1[i].clientHeight === 350 ||
            boxsd1[i].clientHeight === 420
        ) {
            // màn hình lap top
            boxsd1[i].style.height = "532px";
            contenttext1[i].style.minHeight = "100%";
            content.style.minHeight = '1370px';
            btnxemthem1[i].innerHTML = "<div class='thunho'><i class='fa fa-angle-up'></i></div>";
            xemthembtn[i].style.right = '41%';
            // laptop
            //start điện thoại
            if (body.clientWidth < 740) {
                //với màn hình nhỏ hơn 320 
                if (body.clientWidth <= 320) {
                    boxsd1[1].style.height = "605px"; //sua lai thanh 605px
                    //sửa lỗi màn hình
                }
                boxsd1[i].style.minHeight = "100%";
                //sửa chữ xem thêm
                btnxemthem1[i].innerHTML = "<div class='thunho'><i class='fa fa-angle-up'></i></div>";
                xemthembtn[i].style.right = '41%';
            }
            //end điện thoại
            // start ipad
            if (body.clientWidth > 740 && body.clientWidth < 1024) {
                boxsd1[i].style.height = "650px";
            }
            //end ipad
        } else {
            // laptop


            contenttext1[i].style.minHeight = "230px";
            btnxemthem1[i].innerHTML = "<div class='thunho'><i class='fa fa-angle-up'></i></div>";
            xemthembtn[i].style.right = '41%';
            content.style.minHeight = '1150px';
            boxsd1[i].style.height = "350px";
            //sửa chữ xem thêm
            btnxemthem1[i].innerHTML = 'Xem Thêm';
            xemthembtn[i].style.right = '10px';
        }

    }
}
//==============sửa content shadow =======================//

var boxcontentshadow = document.querySelectorAll('.content-shadow');

xemthembtn[0].addEventListener('click', offboxshadow0);
xemthembtn[1].addEventListener('click', offboxshadow1);
xemthembtn[2].addEventListener('click', offboxshadow2);

function offboxshadow0() {
    if (boxcontentshadow[1].clientHeight > 350 || boxcontentshadow[2].clientHeight > 350) {
        contentshawdown.style.height = "350px";
        contenttext2.style.height = "224px";
        boxsd1[1].style.height = "350px";
        contenttext1[1].style.minHeight = "230px";
    }
}

function offboxshadow1() {
    if (boxcontentshadow[0].clientHeight > 350 || boxcontentshadow[2].clientHeight > 350) {
        contentshawdown.style.height = "350px";
        contenttext2.style.height = " 224px";
        boxsd1[0].style.height = "350px";
        contenttext1[0].style.minHeight = "230px";
    }
}

function offboxshadow2() {
    if (boxcontentshadow[0].clientHeight > 350 || boxcontentshadow[1].clientHeight > 350) {
        boxsd1[0].style.height = "350px";
        contenttext1[0].style.minHeight = "230px";
        boxsd1[1].style.height = "350px";
        contenttext1[1].style.minHeight = "230px";
    }
}
//==============sửa content shadow =======================//







//boxshadow 2

var btnxemthem2 = document.querySelector("#xemthem2");


btnxemthem2.addEventListener("click", slidedown);

function slidedown() {
    if (
        contentshawdown.clientHeight === 350 ||
        contentshawdown.clientHeight === 420
    ) {
        contentshawdown.style.height = "700px";
        btnxemthem2.innerHTML = "<div class='thunho'><i class='fa fa-angle-up'></i></div>";
        contenttext2.style.height = "100%";
        xemthembtn[2].style.right = '41%';
        //start điện thoại
        if (body.clientWidth < 740) {
            contentshawdown.style.height = "900px";
            //xét lại height của content nếu click
            content.style.minHeight = "3440px";
            //sửa chữ xem thêm
            btnxemthem2.innerHTML = "<div class='thunho'><i class='fa fa-angle-up'></i></div>";
            // xemthembtn[i].style.right = '41%';
        }
        // end điện thoại

        //start ipad
        if (body.clientWidth > 740 && body.clientWidth < 1024) {
            contentshawdown.style.height = "1150px";
            content.style.minHeight = "1860px";
        }
        //end ipad

        if (body.clientWidth >= 900) {
            content.style.minHeight = "1400px";
        }

    } else {
        contentshawdown.style.height = "350px";
        contenttext2.style.height = "224px";
        btnxemthem2.innerHTML = "Xem thêm";
        xemthembtn[2].style.right = '10px';
        content.style.minHeight = "1150px"; //kiểm tra nếu là ấn vào thì giản content ra hoặc thu lại
        //sửa chữ xem thêm
    }
}
// box quyền lợi
var iconbtn = document.querySelectorAll(".fa-angle-right");
for (let i = 0; i < iconbtn.length; i++) {
    iconbtn[i].addEventListener("click", boxshow);
    iconbtn[i].style.transition = "0.2s";

    function boxshow() {
        var quyenloixemthem = document.querySelectorAll(".quyenloi-xemthem");
        if (quyenloixemthem[i].style.display == "block") {
            iconbtn[i].style.transform = "rotate(0deg)";
            quyenloixemthem[i].style.display = "none";
        } else {
            quyenloixemthem[i].style.display = "block";
            iconbtn[i].style.transform = "rotate(90deg)";
        }
    }
}



// Phúc Bình JS
var boxgiasu = document.getElementById("giasu");
var boxhocvien = document.getElementById("hocvien");
var btngiasu = document.getElementById("btngiasu");
var btnhocvien = document.getElementById("btnhocvien");
var boxgiasuqa = document.getElementById("qa_giasu");
var boxhocvienqa = document.getElementById("qa_hocvien");
var btngiasuqa = document.getElementById("btngiasuqa");
var btnhocvienqa = document.getElementById("btnhocvienqa");

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

function giasu_qa() {
    boxhocvienqa.style.display = "none";
    boxgiasuqa.style.display = "block";
    btnhocvienqa.classList.remove("active");
    btngiasuqa.classList.add("active");
}

function hocvien_qa() {
    boxgiasuqa.style.display = "none";
    boxhocvienqa.style.display = "block";
    btnhocvienqa.classList.add("active");
    btngiasuqa.classList.remove("active");
}

// ==============banner mobile ==================//

//khai báo biến slideIndex đại diện cho slide hiện tại
var slideIndex;
// KHai bào hàm hiển thị slide
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    // var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }


    slides[slideIndex].style.display = "block";

    //chuyển đến slide tiếp theo
    slideIndex++;
    //nếu đang ở slide cuối cùng thì chuyển về slide đầu
    if (slideIndex > slides.length - 1) {
        slideIndex = 0;
    }
    //tự động chuyển đổi slide sau 5s
    setTimeout(showSlides, 5000);
}
//mặc định hiển thị slide đầu tiên
showSlides((slideIndex = 0));

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

//====================== menu đổi màu ============================//
window.onscroll = function() {
    myFunction()
};

function myFunction() {

    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("bg__banner").className = "bg__banner2";
    } else {
        document.getElementById("bg__banner").className = "bg__banner";
    }
    //đổi màu icon navbar mobile nếu height = 0
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.querySelector('.navbar__icon i').style.color = 'white';
    }

}
//đổi màu icon navbar mobile nếu height = 0
if (document.body.scrollTop === 0 || document.documentElement.scrollTop === 0) {
    document.querySelector('.navbar__icon i').style.color = 'black';
}

//====================== menu đổi màu ============================//
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

//Slide PB desktop


function desktopsl() {
    var bSlide = document.querySelector('#swiperslidefirst');
    var bSlide2 = document.querySelector('#swiperslidefirst2');
    var cham = document.getElementsByClassName('dots');
    var cham2 = document.getElementsByClassName('dotss');
    bSlide.style.transition = '.4s';
    bSlide2.style.transition = '0.4s';
    var i = 0;
    setInterval(() => {
        if (i == 0) {
            bSlide.style.marginLeft = '-103%';
            bSlide2.style.marginLeft = '-103%';
            i = 1;
        } else {
            bSlide.style.marginLeft = '0';
            bSlide2.style.marginLeft = '0';
            i = 0;
        }
        for (let x = 0; x < cham.length; x++) {
            cham[x].className = cham[x].className.replace("active", "");
            cham2[x].className = cham2[x].className.replace("active", "");
        }
        cham[i].className += " active";
        cham2[i].className += " actives";
    }, 3000);
}

desktopsl();
//Slide PB mobile
function mobilesl() {
    var mslide = document.querySelector('#mobileslidefirst');
    var mslide2 = document.querySelector('#mobileslidefirst2');
    var cham = document.getElementsByClassName('mdots');
    var cham2 = document.getElementsByClassName('mdotss');
    mslide.style.transition = '0.4s';
    mslide2.style.transition = '0.4s';
    var i = 1;
    setInterval(() => {

        switch (i) {
            case 1:
                mslide.style.marginLeft = '-100%';
                mslide2.style.marginLeft = '-100%';
                i++;
                break;
            case 2:
                mslide.style.marginLeft = '-200%';
                mslide2.style.marginLeft = '-200%';
                i++;
                break;
            case 3:
                mslide.style.marginLeft = '-300%';
                mslide2.style.marginLeft = '-300%';
                i++;
                break;
            case 4:
                mslide.style.marginLeft = '-400%';
                mslide2.style.marginLeft = '-400%';
                i++;
                break;
            case 5:
                mslide.style.marginLeft = '-500%';
                mslide2.style.marginLeft = '-500%';
                i++;
                break;
            case 6:
                mslide.style.marginLeft = '0';
                mslide2.style.marginLeft = '0';
                i = 1;
                break;
        }
        for (let x = 0; x < cham.length; x++) {
            cham[x].className = cham[x].className.replace("active", "");
            cham2[x].className = cham2[x].className.replace("active", "");
        }
        cham[i - 1].className += " active";
        cham2[i - 1].className += " actives";
    }, 3000);
}
mobilesl();