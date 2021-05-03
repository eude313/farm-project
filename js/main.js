var dailyProduction = [{ "shedName": "Shed A", "Amount": 200 }];

function sendData() {
    var shedName = document.getElementById("shedName").value;
    var amount = document.getElementById("amount").value;
    var data = { "shedName": shedName, "Amount": amount };
    dailyProduction.push(data);
    document.getElementById("addform").reset();
}

/*function getShedSales() {
    document.getElementById("details").innerHTML = "";
}*/