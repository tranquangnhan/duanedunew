var body = document.querySelector("body");
//get element body
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
setInterval("tiep()", 5000);

if (kichthuoc < 769) {
    var respon = document.querySelector(".chuyen-slide__boximg");
    var respon2 = document.querySelector(".text-banner2");
    respon.style.width = kichthuoc + "px";
    respon2.style.width = kichthuoc + "px";
}

// xét width banner

var imgBanner = document.querySelectorAll('.chuyen-slide .chuyen-slide__boximg');
for (let i = 0; i < imgBanner.length; i++) {
    imgBanner[i].style.width = body.clientWidth + 'px';
}


// xét width banner



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


var boxsd1 = document.querySelectorAll(".box-sd1");
var contenttext1 = document.querySelectorAll(".cttext1");
var content = document.querySelector(".content");
var contenttext2 = document.querySelector("#cttext2");
var btnxemthem1 = document.querySelectorAll('.xemthem');

//lấy content parent bên mobile
var contentParent = document.querySelectorAll('.content-parent');

for (let i = 0; i < btnxemthem1.length; i++) {
    btnxemthem1[i].addEventListener("click", slidedown1);

    function slidedown1() {
        if (
            boxsd1[i].clientHeight == 350
        ) {

            // màn hình lap top
            boxsd1[i].style.height = "545px";
            //sửa thành 535px
            contenttext1[i].style.minHeight = "100%";
            content.style.minHeight = '1185px';
            btnxemthem1[i].innerHTML = "<div class='thunho'><i class='fa fa-angle-up'></i></div>";
            btnxemthem1[i].style.right = '41%';
            // laptop
            //start điện thoại
            if (body.clientWidth < 740) {
                //với màn hình nhỏ hơn 320 
                if (body.clientWidth <= 320) {
                    boxsd1[1].style.height = "605px"; //sua lai thanh 605px
                    //sửa lỗi màn
                }
                boxsd1[i].style.height = "620px";
                //sửa chữ xem thêm
                content.style.minHeight = '2785px';
                btnxemthem1[i].innerHTML = "<div class='thunho'><i class='fa fa-angle-up'></i></div>";
                btnxemthem1[i].style.right = '41%';
                contentParent[i].style.minHeight = '850px';
                // click vào thu nhỏ box contentParent thu lại
                var thuNho = document.querySelector('.thunho');
                thuNho.addEventListener('click', thuContentParent);

                function thuContentParent() {
                    for (let i = 0; i < contentParent.length; i++) {
                        contentParent[i].style.minHeight = '625px';
                    }
                }
                // click vào thu nhỏ box contentParent thu lại
            }
            //end điện thoại
            // start ipad
            if (body.clientWidth > 740 && body.clientWidth < 1024) {
                boxsd1[i].style.height = "800px";
                content.style.minHeight = '1425px';
            }
            //end ipad
        } else {
            // laptop
            contenttext1[i].style.minHeight = "156px";
            btnxemthem1[i].innerHTML = "<div class='thunho'><i class='fa fa-angle-up'></i></div>";
            btnxemthem1[i].style.right = '41%';
            if (boxsd1[0].style.height === '350px' && boxsd1[1].style.height === '350px' && boxsd1[2].style.height === '350px') {
                content.style.minHeight = '985px';
            }
            boxsd1[i].style.height = "350px";
            //sửa chữ xem thêm
            btnxemthem1[i].innerHTML = 'Xem Thêm';
            btnxemthem1[i].style.right = '10px';
        }

    }
}


//==============sửa content shadow =======================//

var boxcontentshadow = document.querySelectorAll('.content-shadow');

btnxemthem1[0].addEventListener('click', offboxshadow0);
btnxemthem1[1].addEventListener('click', offboxshadow1);
btnxemthem1[2].addEventListener('click', offboxshadow2);

function offboxshadow0() {
    if (boxcontentshadow[1].clientHeight > 350 || boxcontentshadow[2].clientHeight > 350) {
        boxsd1[1].style.height = "350px";
        boxsd1[2].style.height = "350px";
        contenttext1[1].style.minHeight = "156px";
        contenttext1[2].style.minHeight = "156px";
        btnxemthem1[1].innerHTML = 'Xem Thêm';
        btnxemthem1[2].innerHTML = 'Xem Thêm';
        btnxemthem1[1].style.right = '10px';
        btnxemthem1[2].style.right = '10px';
    }
}

function offboxshadow1() {
    if (boxcontentshadow[0].clientHeight > 350 || boxcontentshadow[2].clientHeight > 350) {
        boxsd1[0].style.height = "350px";
        boxsd1[2].style.height = "350px";
        contenttext1[0].style.minHeight = "156px";
        contenttext1[2].style.minHeight = "156px";
        btnxemthem1[0].innerHTML = 'Xem Thêm';
        btnxemthem1[2].innerHTML = 'Xem Thêm';
        btnxemthem1[0].style.right = '10px';
        btnxemthem1[2].style.right = '10px';
    }
}

function offboxshadow2() {
    if (boxcontentshadow[0].clientHeight > 350 || boxcontentshadow[1].clientHeight > 350) {
        boxsd1[0].style.height = "350px";
        boxsd1[1].style.height = "350px";
        contenttext1[0].style.minHeight = "156px";
        contenttext1[1].style.minHeight = "156px";
        btnxemthem1[0].innerHTML = 'Xem Thêm';
        btnxemthem1[1].innerHTML = 'Xem Thêm';
        btnxemthem1[0].style.right = '10px';
        btnxemthem1[1].style.right = '10px';
    }
}
//==============sửa content shadow =======================//

// ==================== click vào content ẩn các box shadow ======================//
content.addEventListener('click', anboxshadow);

function anboxshadow() {
    for (let i = 0; i < boxsd1.length; i++) {
        if (boxcontentshadow[i].clientHeight > 350) {
            boxsd1[i].style.height = "350px";
            contenttext1[i].style.minHeight = "156px";
            btnxemthem1[i].innerHTML = 'Xem Thêm';
            btnxemthem1[i].style.right = '10px';
            if (boxsd1[0].style.height === '350px' && boxsd1[1].style.height === '350px' && boxsd1[2].style.height === '350px') {
                content.style.minHeight = '985px';
            }
        }

    }

}



// Phúc Bình JS
var boxgiasuqa = document.getElementById("qa_giasu");
var boxhocvienqa = document.getElementById("qa_hocvien");
var btngiasuqa = document.getElementById("btngiasuqa");
var btnhocvienqa = document.getElementById("btnhocvienqa");

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


//======================menu active ================================//

var btns = document.querySelectorAll('#menuActive li a');
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active2");
        current[0].className = current[0].className.replace(" active2", "");
        this.className += " active2";
    });
}

//======================menu active ================================//
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

//slide tablet
function tabletsl() {
    var tcham = document.getElementsByClassName('tdot');
    var tSlide2 = document.querySelector('#swiperslidetablet');
    tSlide2.style.transition = '.6s';
    var i = 0; //Thanh dot
    var x = 0; //Cuon man hinh
    var time = setInterval(() => {
        if (x > 220) {
            tSlide2.style.transition = '.6s';
            tSlide2.style.transform = "translateX(0%)";
            x = 50 + 2.7;
            i = 0;
        } else {
            tSlide2.style.transition = '.6s';
            console.log(x);
            console.log(screen.width);
            tSlide2.style.transform = "translateX(-" + x + "%)";
            x += 50 + 2.7;
        }
        for (let x = 0; x < tcham.length; x++) {
            tcham[x].className = tcham[x].className.replace("actives", "");
        }
        tcham[i].className += " actives";
        i++;
    }, 3000);
}
tabletsl();

//Slide PB desktop 

var thanhdot = document.getElementsByClassName('swiper-pagination');
thanhdot[2].style.display = 'none';

function desktopsl() {
    var cham = document.getElementsByClassName('dotss');
    var bSlide2 = document.querySelector('#swiperslidefirst2');
    bSlide2.style.transition = '.6s';
    var i = 0; //Thanh dot
    var x = 0; //Cuon man hinh
    var time = setInterval(() => {
        if (x > 103) {
            bSlide2.style.transition = '.6s';
            bSlide2.style.transform = "translateX(0%)";
            x = 34.333333333333336;
            i = 0;
        } else {
            bSlide2.style.transition = '.6s';
            console.log(x);
            console.log(screen.width);
            bSlide2.style.transform = "translateX(-" + x + "%)";
            x += 100 / 3 + 1;
        }
        for (let x = 0; x < cham.length; x++) {
            cham[x].className = cham[x].className.replace("active", "");
        }
        cham[i].className += " actives";
        i++;
    }, 3000);
}

// ========================sửa nút điều hướng banner=====================///
var iconBannerL = document.querySelector('.iconBannerL');
var iconBannerR = document.querySelector('.iconBannerR');
iconBannerL.style.left = '40px';
iconBannerR.style.left = body.clientWidth - 50 + 'px'
    // =====================sửa nút điều hướng banner========================///

desktopsl();
//Slide PB mobile
function mobilesl() {
    var mslide2 = document.querySelector('#mobileslidefirst2');
    var cham2 = document.getElementsByClassName('mdotss');
    mslide2.style.transition = '0.4s';
    var i = 1;
    setInterval(() => {

        switch (i) {
            case 1:
                mslide2.style.transition = '0.4s';
                mslide2.style.transform = "translateX(-100%)";
                i++;
                break;
            case 2:
                mslide2.style.transition = '0.4s';
                mslide2.style.transform = "translateX(-200%)";
                i++;
                break;
            case 3:
                mslide2.style.transition = '0.4s';
                mslide2.style.transform = "translateX(-300%)";
                i++;
                break;
            case 4:
                mslide2.style.transition = '0.4s';
                mslide2.style.transform = "translateX(-400%)";
                i++;
                break;
            case 5:
                mslide2.style.transition = '0.4s';
                mslide2.style.transform = "translateX(-500%)";
                i++;
                break;
            case 6:
                mslide2.style.transition = '0.4s';
                mslide2.style.transform = "translateX(0%)";
                i = 1;
                break;
        }
        for (let x = 0; x < cham2.length; x++) {
            cham2[x].className = cham2[x].className.replace("active", "");
        }
        cham2[i - 1].className += " actives";
    }, 3000);
}
mobilesl();


//Slide tablet
var tablet = document.getElementsByClassName('swiper-container-tablet');
if (screen.width >= 740 || screen.width <= 1023) {
    tablet.style.display = 'block';
} else
    tablet.style.display = 'none';