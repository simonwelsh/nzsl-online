$(document).ready(function() {

  function hide_vocab_sheet_on_mobile() {
    var bar = $('.vocab_sheet_bar');
    var windowWidth = $(window).width();
    if((windowWidth < 768) || (bar.length && bar.find('.vocab_sheet_bar_item').length === 0)) {
      bar.hide();
      $('.not_sticky_footer').removeClass('vocab_sheet_background');
    } else if ((windowWidth > 767) && ($('.vocab_sheet_bar').length)) {
      bar.show();
      $('.not_sticky_footer').addClass('vocab_sheet_background');
    }
  }

  function changeVocabLocation() {
    if($('.search-result-banner').length > 0) {
      $('.vocab_sheet_bar').css("top", "300px")
    } else {
      $('.vocab_sheet_bar').css("top", "400px")
    }
  }
  $(window).resize(function() {
    hide_vocab_sheet_on_mobile();
  })

  hide_vocab_sheet_on_mobile();
  changeVocabLocation();
});
