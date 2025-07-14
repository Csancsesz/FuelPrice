function mywrite() {
    var a = parseFloat(document.getElementById("csm").value);   // fuel / 100km
    var b = parseFloat(document.getElementById("dist").value);  // distance
    var c = parseFloat(document.getElementById("price").value); // unit price

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById("result").innerText = "Please enter valid numbers!";
        return;
    }

    var fuelUsed = (b / 100) * a;
    var totalCost = fuelUsed * c;

    document.getElementById("result").innerText = "The price is: " + totalCost.toFixed(2);
}
