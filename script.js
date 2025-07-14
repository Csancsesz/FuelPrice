function calculate() {
    var consumption = parseFloat(document.getElementById("csm").value); // liter / 100km
    var distance = parseFloat(document.getElementById("dist").value);   // km
    var unitPrice = parseFloat(document.getElementById("price").value); // price / liter

    if (isNaN(consumption) || isNaN(distance) || isNaN(unitPrice)) {
        document.getElementById("result").innerText = "Please enter valid numbers!";
        return;
    }


    var fuelNeeded = (consumption * distance) / 100;
    var totalCost = fuelNeeded * unitPrice;

    document.getElementById("result").innerText = 
        `The price is: ${totalCost.toFixed(2)}`;
}
