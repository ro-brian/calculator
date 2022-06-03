function allScript() {
   var afisare = document.getElementById("text");
   var notNumber = ["AC", "+/-", "%", "/", "X", "-", "+", "="];

//    function runInput(id) {
//        var buton = document.getElementById(id);
//        buton.onclick = function() {
//             if (!notNumber.includes(buton.value)) {
//                 afisare.value += "" + buton.value;
//                 return afisare.value;
//             }
//         }
//    }
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
    }
    var n = 19;
    var x = 0;
    for(var i = 1; i<=n; i++) {
        x = "btn" + i;
        apasare(x);
    }
}