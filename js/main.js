var dailySale = [{ "shedName": "Shed A", "amount": 200 }];

function sendData() {
    var shedName = document.getElementById("shedName").value;
    var amount = document.getElementById("amount").value;
    var data = { "shedName": shedName, "amount": amount };
    dailySale.push(data);
    document.getElementById("addform").reset();
}

function getProduction() {
    var table = document.getElementById("data");
    table.innerHTML = "";
    var dat = "";
    dailySale.forEach(x => {
                dat += '<tr>';
                dat += '<td>' + 'Production' + x.shedName + '</td>' + '<td>' + x.amount + ' lts/day' + '</td>';
                dat += '</tr>';

            }