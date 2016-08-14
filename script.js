$(document).ready(function(){
  $('.quote-english').hide();
  $('button').on('click',function(){
    var $this = $(this);
    $('.quote-spanish,.quote-english').toggle();
    $this.toggleClass('.btnLanguage');
    if ($this.hasClass('.btnLanguage')){
      $this.html('Espa&ntilde;ol');
    } else {
      $this.html('English');
    }
  });
});