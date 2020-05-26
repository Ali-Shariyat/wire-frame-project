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
})