
$( document ).ready(function() {
  var colorArray;
    colorArray=[ "grey" ];
  $( ".btn" ).click(function() {
      var random=Math.floor((Math.random() * colorArray.length) + 0);
      $("body").css("background", colorArray[random] );
   
});

$("#purple" ).click(function() {
     $("body").css("background-color", colorArray[3] );

});
});