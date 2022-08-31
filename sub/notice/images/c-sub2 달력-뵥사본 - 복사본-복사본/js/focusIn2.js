$(function () {
    $('.navBt').on('click', function () {
        var parent = $(this).parent();
        if (parent.hasClass('on')) {
            parent.removeClass('on')
        } else {
            parent.addClass('on')
        }
    });
});