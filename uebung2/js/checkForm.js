/* Formular überprüfen*/

input = function(id){

    //holt sich den Text aus der Inputbox
    return document.getElementById(id).value;
};


inputPrüfung = function(inputString,pattern){

    //Die Funktion prüft ob das Pattern für den Inputtext zutrifft

    // bei falscher Eingabe => false, bei richtiger true
    return inputString.match(pattern) !== null;

};


alertWindow = function(fehlermeldung, id){

    alert(fehlermeldung);

};

// legt die pattern für jedes Inputfeld fest
toCheck = { name: "^[a-zA-Z]+$",
            vorname: "^[a-zA-Z]+$",
            matrikelnummer: "^[\\d]+$",
            email: "^[_a-z0-9-]+@[a-z0-9-]+\\.(org|net|com|de)$",
            handynummer: "^[0][0-9]+$"};


// Für individuelle Fehlermeldungen
errorCheck = { name: "Bitte geben Sie den Nachnamen ausschließlich mit Buchstaben ein",
               vorname: "Bitte geben Sie den Vornamen ausschließlich mit Buchstaben ein",
               matrikelnummer: "Bitte geben Sie die Matrikelnummer ausschließlich mit Zahlen ein",
               email: "Bitte geben Sie die email in folgendem Muster m.kraus@hs-mannheim.de ein",
               handynummer: "Bitte geben Sie die Handynummer ausschließlich mit Zahlen und einer führenden 0 ein"};


check = function(id){


    // Die Funktion prüft immer ein Inputfeld auf richtige Eingabe
    if(inputPrüfung(input(id), toCheck[id]) == false){
        // markiere die input-box rot, falls die Eingabe falsch
        $("#" + id + "box").addClass( "has-error" );
        alertWindow(errorCheck[id], id);
        return false;
    }
    $("#" + id + "box").removeClass( "has-error" );
    return true;
};

formCheck = function() {

    // ids von toCeck holen
    var ids = Object.keys(toCheck);

    // auf Gültigkeit prüfen und in ein entsprechendes Array "mappen"
    var validResults = ids.map(check);

    // findet den ersten false Wert im Gültigkeitsarray
    // und setzt den Fokus auf das erste falsche InputFeld
    var firstFalse = validResults.indexOf(false);
    if(firstFalse>=0) {
        $("#"+ids[firstFalse]).focus();
        return false;
    } else {
        return true;
    }
};
