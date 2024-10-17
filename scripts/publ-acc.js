const publicationsAccordion = function () {
    $(document).ready(function () {
        $('.checkbox-label').removeAttr('tabindex');
    });
    if($(window).width() > 767) {
        $('.publications__checkbox-form').accordion('destroy')
    }
    if($(window).width() <= 767) {
        $('.publications__checkbox-form').accordion({
            collapsible: true
        });
    }
    $('.publications__checkbox-form').accordion('refresh')
}