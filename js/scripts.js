$(document).ready(function(){
  $("form#transportation_survey").submit(function(event){
    event.preventDefault();
    $("#work-responses").show();
    var arr = [];

    $("input:radio[name=work-transportation]:checked").each(function(){
      var workTransportationMode = $(this).val().toUpperCase();
      arr.push(workTransportationMode);
      $('#work-responses').append(workTransportationMode + "<br>");
    });


    $("#fun-responses").show();
    $("input:checkbox[name=fun-transportation]:checked").each(function(){
      var funTransportationMode = $(this).val();
      $('#fun-responses').append(funTransportationMode + "<br>");
    });

    $('#test').append(arr + "<br>");
    $('#transportation_survey').hide();
  });
});
