// $('.main-carousel').flickity({
//     // options
//     cellAlign: 'left',
//     contain: true,
//     rightToLeft: true
//
// });
$("[data-add-to-modal] .this-img").click(function () {
    var _self = $(this),
        _get_index= _self.parents("li").index()
    _self.parents("[data-add-to-modal]").find(".this-img").each(function () {
        $(".main-carousel").append($(".copy-content").html());
        $(".main-carousel").find(".carousel-cell:last img").attr("src", $(this).attr("src"));
    });
    setTimeout(function () {
        $('.main-carousel').flickity({
            // options
            cellAlign: 'left',
            contain: true,
            rightToLeft: true
        });
        $(window).resize();
        $('.main-carousel').flickity('select', _get_index);
    },100)
    $(".black-page,.custom-modal").stop().fadeIn();
});
$(".black-page").click(function () {
    $(".black-page,.custom-modal").fadeOut();
    // $(".custom-modal .main-carousel").empty();
});
$(".profile-sidebar .profile-tabs li a").click(function (e) {
    var _self = $(this);
    _self.addClass("active").parents("li").siblings("li").find("a").removeClass("active")
    _self.parents(".profile-sidebar").siblings(".profile-main").find("> ul > li").eq(_self.parents("li").index()).addClass("active").siblings("li").removeClass("active");
    e.preventDefault();
});
$(".custom-dropdown .head").attr("set-toggle","0");
$(".custom-dropdown .head:not(.stop)").click(function () {
    var _self = $(this);
    if(eval(_self.attr("set-toggle")) == 0){
        $(this).siblings(".sub-dropdown").stop().slideDown();
        _self.find("span").text("-")
        _self.attr("set-toggle","1");
    }else if(eval(_self.attr("set-toggle")) == 1){
        $(this).siblings(".sub-dropdown").stop().slideUp();
        _self.find("span").text("+")
        _self.attr("set-toggle","0");
    }
});
$(".custom-dropdown .head:not(.stop)").each(function () {
    var _self = $(this);
    if(_self.siblings(".sub-dropdown.show").length){
        _self.trigger("click");
    }
});