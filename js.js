$( document ).ready(function()  {
var countrys ={
    "Ecuador": {
    Population: "16,385,450", 
    Language: "Spanish",
    Animal: "Andean condor",
    Capital: "Quito"
  },
  
  "Spain": {
    Population: "46,064,604",
    Language: "Spanish",
    Animal: "Bull",
    Capital: "Madrid",
  },
  
 "France" : {
    Population: "64,668,129",
    Language: "French",
    Animal: "gallic rooster",
    Capital: "Paris"
  },
  
  "Colombia": {
    Population: "48,654,392",
    Language: "Spanish",
    Animal: "condor",
    Capital: "Bogotá"
  },
  
  "Venezuela" : {
    Population: "30 402 007",
    Language: "Spanish",
    Animal: "troupial",
    Capital: "Caracas"
  },
  
  "United State": {
    Population: "322,762,018",
    Language: "English",
    Animal: "bald eagle",
    Capital: "Washington, D.C."
  },
  
 "Argentina": {
    Population: "41,504,370",
    Language: "Spanish",
    Animal: "Rufous hornero",
    Capital: "Buenos Aires"
  }
};


    $(".btn-info" ).click(function() {
      var choose = $("#click-me").val();
     
      
      $("#Language").text(countrys[choose].Language);
      $("#Population").text(countrys[choose].Population); 
      $("#Animal").text(countrys[choose].Animal);
      $("#Capital").text(countrys[choose].Capital);
      
      
});
});








