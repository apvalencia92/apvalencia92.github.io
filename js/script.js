$(document).ready(function(){



  $('#botones a').on('click',function(){
        var url=$(this).attr('href');
      $('#contenido_ajax').load(url);
      return false;



  })

});
