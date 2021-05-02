let student = [{
        "name": "Charles",
        "age": 10,
        "sex": "male",
        "grades": { "IP1": 10, "IP2": 30, "IP3": 90 }
    },
    {
        "name": "Carol",
        "age": 17,
        "sex": "female",
        "grades": { "IP1": 80, "IP2": 40, "IP3": 30 }
    }
];
var average = sum = 0;
for (var i = 0; i < student.length; i++) {
    sum += student[i].grades.IP1;
    if (i == student.length - 1) {
        average = sum / student.length;
        console.log(average);
    }
}