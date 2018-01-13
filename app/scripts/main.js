'use strict';
$(function() {

    /* Mobile Menu Toggle */
    var $menuToggleBtn = $('#menu-toggle');
    var $navMenu = $('#nav-menu');

    $menuToggleBtn.on('click', function() {
        // avoid multiple event fires
        if ($navMenu.is(':animated')) { 
            return false; 
        }
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