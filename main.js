function allScript() {
   var afisare = document.getElementById("text");
   var notNumber = ["AC", "+/-", "%", "/", "X", "-", "+", "="];
   var egalId = "btn19";

    function apasare(id) {
        var buton = document.getElementById(id);
        var egal = document.getElementById(egalId);
        function signClick(valoare, operator) {
            afisare.value = "";
            apasare(id);
            egal.onclick = function() {
                if (operator == "%") {
                    afisare.value = parseInt(valoare) % parseInt(afisare.value);
                } else if (operator == "/") {
                    afisare.value = parseFloat(valoare) / parseFloat(afisare.value);
                } else if (operator == "X") {
                    afisare.value = parseFloat(valoare)*parseFloat(afisare.value);
                } else if (operator == "-") {
                    afisare.value = parseFloat(valoare) - parseFloat(afisare.value);
                } else if (operator == "+") {
                    afisare.value = parseFloat(valoare) + parseFloat(afisare.value);
                } 
            }
        }
        
        buton.onclick = function() {
            if (!notNumber.includes(buton.value)) {
                afisare.value += "" + buton.value;
            } else if (buton.value == "AC") {
                afisare.value = "";
            } else if (buton.value == "%" && afisare.value != null) {
                var valoare = afisare.value;
                signClick(valoare, "%");
            } else if(buton.value == "/" && afisare.value != null) {
                var valoare = afisare.value;
                signClick(valoare, "/");
            } else if (buton.value == "X" && afisare.value != null) {
                var valoare = afisare.value;
                signClick(valoare, "X");
            } else if (buton.value == "-" && afisare.value != null) {
                var valoare = afisare.value;
                signClick(valoare, "-");
            } else if (buton.value == "+" && afisare.value != null) {
                var valoare = afisare.value;
                signClick(valoare, "+");
            }
        }
        return afisare.value;
    }
    
    var n = 19;
    var x;

    function pressKey() {
        window.addEventListener("keydown", e => {
            var numar = e.keyCode - 48;
            if (numar >= 0 && numar <=9) afisare.value += "" + numar;
                else if (numar + 48 == 8 || numar + 48 == 46) {
                    var sir = afisare.value;
                    var copie = "";
                    for (var i = 0; i<sir.length - 1; i++) {
                        copie += "" + sir[i];
                    }
                    afisare.value = copie;
                } else if (numar + 48 == 27) {
                    afisare.value = "";
                } else if (numar + 48 == 190) {
                    afisare.value += ".";
                }
        })
    }
    pressKey();

    for(var i = 1; i<=n; i++) {
        x = "btn" + i;
        apasare(x);
    }
}