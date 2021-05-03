var leapYear = [




    { month: "January", days: 31 },


    { month: "February", days: 29 },


    { month: "March", days: 31 },


    { month: "April", days: 30 },


    { month: "May", days: 31 },


    { month: "June", days: 30 },


    { month: "July", days: 31 },


    { month: "August", days: 31 },


    { month: "September", days: 30 },


    { month: "October", days: 31 },


    { month: "November", days: 30 },


    { month: "December", days: 31 }
];





let n = leapYear.length;


function displayDetails() {


    let total = totalProduction();


    let price = 45;


    document.querySelector("#result").innerHTML = total + " litres per day.";


    document.querySelector("#weekly").innerHTML = "Ksh." + overTime(price, total, "weekly");


    document.querySelector("#monthly").innerHTML = "Ksh." + overTime(price, total, "monthly");


    document.querySelector("#yearly").innerHTML = "Ksh." + overTime(price, total, "yearly");





    var months = [];


    months = monthlyReport(price, total);


    let len = months.length;


    for (let i = 0; i < len; i++) {


        let month = months[i].month;


        let sales = months[i].sales;


        document.querySelector("#" + month).innerHTML = "Your income for " + month + " is : " + sales;


    }


}





var row = 1;


function totalProduction() {


    var shadeA = parseInt(document.getElementById("litres1").value);


    var shadeB = parseInt(document.getElementById("litres2").value);


    var shadeC = parseInt(document.getElementById("litres3").value);


    var shadeD = parseInt(document.getElementById("litres4").value);





    if (!shadeA || !shadeB || !shadeC || !shadeD) {


        alert("Please fill all the boxes");


        return;


    }





    var production = [];


    production.push({ name: "Shade A", litres: shadeA }, { name: "Shade B", litres: shadeB }, { name: "Shade C", litres: shadeC }, { name: "Shade D", litres: shadeD });


    let length = production.length;


    let sum = 0;


    for (let i = 0; i < length; i++) {


        sum += production[i].litres;


        var display = document.getElementById("display");


        var newRow = display.insertRow(row);


        var cell1 = newRow.insertCell(0);


        var cell2 = newRow.insertCell(1);





        cell1.innerHTML = production[i].name;


        cell2.innerHTML = production[i].litres;


        row++;


    }


    return sum;


}





function overTime(price, total, time) {


    let projection = 0;


    if (time === "weekly") {


        projection = total * price * 7;





    } else if (time === "yearly") {


        projection = total * price * 365;


    } else {


        projection = total * price * 30;


    }


    return projection;


}





function monthlyReport(price, totalProduction) {


    let result = [];


    for (let i = 0; i < n; i++) {


        let amount = leapYear[i].days * price * totalProduction;


        result.push({ month: leapYear[i].month, sales: amount });


    }