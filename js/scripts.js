$(document).ready(function() {
  $("#submit").click(function(){
    var sentence = $("input#sentence").val();
    var splitted = sentence.split("");


    for (var i = 0; i < splitted.length; i += 1){
      if (splitted[i] === "a" || splitted[i] === "e" || splitted[i] === "i" || splitted[i] === "o" || splitted[i] === "u") {
        splitted[i] = "-";
      }
    }



    $("#formOne").hide();
    $(".output").text(splitted);
  });
});
