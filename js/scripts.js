$(document).ready(function() {
  $("#submit").click(function(){
    var sentence = $("input#sentence").val();
    var splitted = sentence.toLowerCase().split("");
    var arr = [];

    splitted.forEach(function(split) {
      if (split === "a" || split === "e" || split === "i" || split === "o" || split=== "u") {
        arr.push(split = "-");
      } else {
        arr.push(split);
      }
    })

    // for (var i = 0; i < splitted.length; i += 1){
    //   if (splitted[i] === "a" || splitted[i] === "e" || splitted[i] === "i" || splitted[i] === "o" || splitted[i] === "u") {
    //     splitted[i] = "-";
    //   }
    // }



  //  $("#formOne").hide();
    $(".output").text(arr);
  });
});
