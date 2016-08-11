$(document).ready(function(){
  $('button').on('click',function(){
    $('.quote').toggle(function(){
      $('.quote').html('<p class="pull-right"><i>"Liberty doesn\'t need wings<br>what it needs is roots"<br></i><span class="pull-right">Octavio Paz</span></p>')
    });

  })
});