$(document).ready(function() {

    var $window = $(window),
        $popoverLink = $('[data-popover]'),
        $document = $(document)

    function init(){
        $window.scroll(windowScroll)
        $popoverLink.on('click', openPopover )
        $document.on('click', closePopover)
    }

    function windowScroll(){
        if ($(window).scrollTop() >= 1) {
            $('body').addClass('scrolled');
        } else {
            $('body').removeClass('scrolled');
        }
    }

    function openPopover(e){
        e.preventDefault();
 
        closePopover();
        var popover = $($(this).data('popover'))
        popover.toggleClass('open');
        e.stopImmediatePropagation();
    }

    function closePopover(){
       if($('.navbar-buttons-wrap.open').length > 0){
            $('.navbar-buttons-wrap').removeClass('open')
       }
    }


    init();
});