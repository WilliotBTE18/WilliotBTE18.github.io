var x = 0;
var y = 1;
var totr = 0;
$("#javascript1").show();
$("#utanscriptrek").hide();


$("#Invändig").click(function () {
    x = 900;


    $("#valttyp").html("<h3>Du har valt invändig rekond</h3>");
    totr = x * y;
    $("#totalkostnadrek").html("<h3>Priset blir " + totr + " KR</h3>");
});



$("#Polering").click(function () {
    x = 1600;
    $("#valttyp").html("<h3>Du har valt polering</h3>");
    totr = x * y;
    $("#totalkostnadrek").html("<h3>Priset blir " + totr + " KR</h3>");

});
$("#Helrekond").click(function () {
    x = 2400;


    $("#valttyp").html("<h3>Du har valt helrekond</h3>");
    totr = x * y;
    $("#totalkostnadrek").html("<h3>Priset blir " + totr + " KR</h3>");
});

$("#Småbil").click(function () {
    y = 0.8;

    $("#valtbil").html("<h3>Du har valt småbil</h3>");
    totr = x * y;
    $("#totalkostnadrek").html("<h3>Priset blir " + totr + " KR</h3>");


});
$("#Sedan").click(function () {
    y = 1;
    $("#valtbil").html("<h3>Du har valt sedan</h3>");
    totr = x * y;
    $("#totalkostnadrek").html("<h3>Priset blir " + totr + " KR</h3>");


});
$("#Kombi").click(function () {
    y = 1.2;
    $("#valtbil").html("<h3>Du har valt kombi</h3>");
    totr = x * y;
    $("#totalkostnadrek").html("<h3>Priset blir " + totr + " KR</h3>");


});

$("#Suv").click(function () {
    y = 1.2;
    $("#valtbil").html("<h3>Du har valt suv</h3>");
    totr = x * y;
    $("#totalkostnadrek").html("<h3>Priset blir " + totr + " KR</h3>");
});
