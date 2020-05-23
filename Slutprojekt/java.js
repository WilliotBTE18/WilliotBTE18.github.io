
var x=0;
var y=1;
var totr=0;
$("#javascript1").show();
$("#utanscriptrek").hide();
console.log("test");


$("#logo1").click(function(){ //en funktion som lyssnar efter ett tryck på #knapp12
 x=2030203203020;
 console.log(x);

 alert("@idjfisdjfisdii2");

});









$("#Invändig").click(function(){ //en funktion som lyssnar efter ett tryck på #knapp12
 x=900;


$("#valttyp").html("<h3>Du har valt invändig rekond</h3>");
totr=x*y;
$("#totalkostnadrek").html("<h3>Priset blir "+totr+" KR</h3>");
});



$("#Polering").click(function(){ //en funktion som lyssnar efter ett tryck på #knapp12
 x=1600;
$("#valttyp").html("<h3>Du har valt polering</h3>");
totr=x*y;
$("#totalkostnadrek").html("<h3>Priset blir "+totr+" KR</h3>");

});
$("#Helrekond").click(function(){ //en funktion som lyssnar efter ett tryck på #knapp12
 x=2400;


$("#valttyp").html("<h3>Du har valt helrekond</h3>");
totr=x*y;
$("#totalkostnadrek").html("<h3>Priset blir "+totr+" KR</h3>");


});


$("#Småbil").click(function(){ //en funktion som lyssnar efter ett tryck på #knapp12
 y=0.8;

$("#valtbil").html("<h3>Du har valt småbil</h3>");
totr=x*y;
$("#totalkostnadrek").html("<h3>Priset blir "+totr+" KR</h3>");


});
$("#Sedan").click(function(){ //en funktion som lyssnar efter ett tryck på #knapp12
 y=1;
$("#valtbil").html("<h3>Du har valt sedan</h3>");
totr=x*y;
$("#totalkostnadrek").html("<h3>Priset blir "+totr+" KR</h3>");


});
$("#Kombi").click(function(){ //en funktion som lyssnar efter ett tryck på #knapp12
 y=1.2;
$("#valtbil").html("<h3>Du har valt kombi</h3>");
totr=x*y;
$("#totalkostnadrek").html("<h3>Priset blir "+totr+" KR</h3>");


});
$("#Suv").click(function(){ //en funktion som lyssnar efter ett tryck på #knapp12
 y=1.2;
 $("#valtbil").html("<h3>Du har valt suv</h3>");
 totr=x*y;
 $("#totalkostnadrek").html("<h3>Priset blir "+totr+" KR</h3>");



});
