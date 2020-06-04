//Quyền lợi
var qltitle = $(".quyenloi__title");
var qlcontent = $(".quyenloi-xemthem");
var icon = $(".fa-angle-right");
for (let i = 0; i < qltitle.length; i++) {
    $(qltitle[i]).click(function (e) { 
        e.preventDefault();
        $(qlcontent[i]).slideToggle();
        //class opened cho phép xoay icon
        $(icon[i]).toggleClass('opened');
        //Slide up và xóa class các anh em của nó
        $(qlcontent[i]).parent().siblings().children(".quyenloi-xemthem").slideUp();
        $(qlcontent[i]).parent().siblings().find('.fa-angle-right').removeClass('opened');
        icon[i].style.transition = "0.4s";
    });
    
}

// Q&A
var question = document.getElementsByClassName('faq__title');
var anwser = document.getElementsByClassName('boxtext-faq');
for (let i = 0; i < question.length; i++) {
    $(question[i]).click(function(e) {
        e.preventDefault();
        $(anwser[i]).slideToggle();
        //Chọn các phần tử anh em của nó và cho ẩn đi
        $(anwser[i]).parent().siblings().children(".boxtext-faq").slideUp();
    });
}

//start count 
var counters = function() {
    $('.wheel-testimonial-item span ').not('.animated').each(function() {
        if ($(window).scrollTop() >= $(this).offset().top - $(window).height() * 0.7) {
            $(this).addClass('animated').countTo();
        }
    });

    var elemSize = $('.wheel-interest ');
    if (elemSize.length) {
        if ($(window).scrollTop() >= elemSize.offset().top - $(window).height() * 0.7) {
            elemSize.each(function(index, el) {
                elemSize.eq(index).width($(this).attr('data-size') + '%')
            });

        }
    }

}

$(window).on('scroll', function() {
    counters();
})

//end count
