/* Daten bekomm ich später vom Server */
var messeJSON =  [["Cebit", 15], ["ConHit", 50], ["WebTechCon", 40]];

var teilnehmerHeader = ["Name", "Vorname", "Studiengang", "eMail"];

var teilnehmerCebitJSON = [["Ent", "Thilo", "IB", "t.ent@gmail.de"], ["Kraus","Martina","IB","m.kraus@hs-mannheim.de"], ["Smits","Thomas","UIB","t.smits@hs-mannheim.de"], ["Gröschel","Michael","IMB","m.gröschel@hs-mannheim.de"]];

var teilnehmerConhITJSON = [["Schmuecker", "Paul", "IMB", "p.schmuecker@hs-mannheim.de"],["Felsenheiemr","Jan","IB","j.felsenheimer@diebestebaenderwelt.de"]];

var teilnehmerWebTechJSON =[["Spies","Marcell","IB","m.Spies@gmail.de"],["Hoppe","Johannes","UIB","j.hoppe@gmx.de"],["Hofmeister","Johannes","UIB","cessor@gmail.de"]];


/* Kostentabelle Messen, variable Zeilenanzahl, aber immer zwei Spalten */
messeKosten = function(element) {
    var row = document.getElementById("messeTable").insertRow(-1);

    //fügt Spalte am Ende an
    var messe = row.insertCell(-1);
    var kosten = row.insertCell(-1);

    messe.innerText = element[0];
    kosten.innerText = element[1];
};

messeJSON.forEach(messeKosten);

/* Header für Teilnehmer Messen */
header = function(element,id){
    var table = document.getElementById(id);

    for(var i=0; i < element.length; i++){
        var span = document.createElement("span");
        span.innerText = element[i];

        table.appendChild(span);

    }
};

header(teilnehmerHeader,"header");
header(teilnehmerHeader,"header2");
header(teilnehmerHeader,"header3");

/* Cebit, eine Reihe (div) mit 4 Spalten (spans)*/
messeTeilnehmer = function(element,id) {

    var table = document.getElementById(id);

    //erzeuge neue Reihe
    var div = document.createElement("div");
    table.appendChild(div);

    //Schleife hat 4 Durchläufe für Messe Cebit, da 4 Arrays in teilnehmerCebitJSON array
    for(var i=0; i<element.length; i++){
        //erzeuge Spalte
        var span = document.createElement("span");
	//füge den String in Spalte ein
        span.innerText = element[i];
	//hänge Spalte an Reihe an
        div.appendChild(span);
    }

};

/* forEach erwartet ein Argument, deshalb anonyme function mit mehr Argumenten, da wir ID noch brauchen */
teilnehmerCebitJSON.forEach(function(element){ messeTeilnehmer(element,"tableCebit");});
teilnehmerConhITJSON.forEach(function(element){ messeTeilnehmer(element,"tableConhIT");});
teilnehmerWebTechJSON.forEach(function(element){ messeTeilnehmer(element,"tableWebTech");});
