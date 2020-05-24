var x = 0; // x är kostnaden för olika tjänster
var y = 1; // y är förändringsfaktorn som ändrar kostaden beroende på vad för bil man har
var totr = 0; //totr är den totala kostnaden
$("#javascript1").show(); //Visar javascriptet där man kan göra sina val
$("#utanscriptrek").hide();// gömmer divtagen med priser som ska visas när javascript är av


$("#Invändig").click(function () {// funktion som lyssnar efter tryck på valt id
    x = 900;  //pris för denna tjänst


    $("#valttyp").html("<h3>Du har valt invändig rekond</h3>");//skrivet ut ditt val
    totr = x * y; //totala kostanden räknas ut
    $("#totalkostnadrek").html("<h3>Priset blir " + totr + " KR</h3>"); //utskrift av pris
});



$("#Polering").click(function () { // funktion som lyssnar efter tryck på valt id
    x = 1600;//pris för denna tjänst
    $("#valttyp").html("<h3>Du har valt polering</h3>");//skrivet ut ditt val
    totr = x * y;  //totala kostanden räknas ut
    $("#totalkostnadrek").html("<h3>Priset blir " + totr + " KR</h3>");//utskrift av pris

});
$("#Helrekond").click(function () { // funktion som lyssnar efter tryck på valt id
    x = 2400;//pris för denna tjänst
    $("#valttyp").html("<h3>Du har valt helrekond</h3>");//skrivet ut ditt val
    totr = x * y;   //totala kostanden räknas ut
    $("#totalkostnadrek").html("<h3>Priset blir " + totr + " KR</h3>");//utskrift av pris
});

$("#Småbil").click(function () { // funktion som lyssnar efter tryck på valt id
    y = 0.8;//sätter y till förändringsfaktorn

    $("#valtbil").html("<h3>Du har valt småbil</h3>");//skrivet ut ditt val
    totr = x * y;   //totala kostanden räknas ut
    $("#totalkostnadrek").html("<h3>Priset blir " + totr + " KR</h3>");//utskrift av pris


});
$("#Sedan").click(function () { // funktion som lyssnar efter tryck på valt id
    y = 1;//sätter y till förändringsfaktorn
    $("#valtbil").html("<h3>Du har valt sedan</h3>");//skrivet ut ditt val
    totr = x * y;  //totala kostanden räknas ut
    $("#totalkostnadrek").html("<h3>Priset blir " + totr + " KR</h3>");//utskrift av pris


});
$("#Kombi").click(function () { // funktion som lyssnar efter tryck på valt id
    y = 1.2;//sätter y till förändringsfaktorn
    $("#valtbil").html("<h3>Du har valt kombi</h3>");//skrivet ut ditt val
    totr = x * y;  //totala kostanden räknas ut
    $("#totalkostnadrek").html("<h3>Priset blir " + totr + " KR</h3>");//utskrift av pris
});

$("#Suv").click(function () { // funktion som lyssnar efter tryck på valt id
    y = 1.2; //sätter y till förändringsfaktorn
    $("#valtbil").html("<h3>Du har valt suv</h3>");//skrivet ut ditt val
    totr = x * y;  //totala kostanden räknas ut
    $("#totalkostnadrek").html("<h3>Priset blir " + totr + " KR</h3>");//utskrift av pris
});
