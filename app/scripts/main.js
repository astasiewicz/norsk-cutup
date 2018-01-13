$(function() {
    var $menuToggleBtn = $('#menu-toggle');
    var $navMenu = $('#nav-menu');

    $menuToggleBtn.on('click', function(ev) {
        ev.stopImmediatePropagation();
        $menuToggleBtn.toggleClass('active');
        $navMenu.slideToggle(300);

        if($menuToggleBtn.hasClass('active')) {
            $menuToggleBtn.find('i').removeClass('fa-bars').addClass('fa-remove');
        }
        else {
            $menuToggleBtn.find('i').removeClass('fa-remove').addClass('fa-bars');
        }
    });
})