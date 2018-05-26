(function($){
  $( document ).ready(function() {
    $('#block-panels-mini-header .panel-col-first .inside').prepend('<div class="ham-menu"></div>');
    $('.pane-system-main-menu').append('<div class="ham-close"></div>');
    $('body').append('<div class="background-overlay"></div>');

    $('.ham-close').click(function(){
      $('.background-overlay').removeClass('visible');
      $('.pane-system-main-menu').removeClass('visible');
    });
    $('.background-overlay').click(function(){
      $('.background-overlay').removeClass('visible');
      $('.pane-system-main-menu').removeClass('visible');
    });
    $('.ham-menu').click(function(){
      $('.background-overlay').addClass('visible');
      $('.pane-system-main-menu').addClass('visible');
    });
  });
})(jQuery);
