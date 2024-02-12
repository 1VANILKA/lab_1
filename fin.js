
let repeat = {};

function Result() {

    let inputString = document.getElementById("for_letter").value;

    let numbers = inputString.split(",").map(function (item) {
        return parseFloat(item.trim());
    });

    for (var i = 0; i < numbers.length; i++) {
        let num = numbers[i];

        if (repeat[num]) {
            repeat[num]++;
        } else {
            repeat[num] = 1;
        }
    }

    display();

    document.getElementById("for_letter").value = "";
}

function display() {
    let resultHTML = "";

    for (let key in repeat) {
        if (repeat.hasOwnProperty(key)) {
            resultHTML += `Number ${key}: Count - ${repeat[key]}<br>`;
        }
    }

    document.getElementById('sum_by_letter').innerHTML = resultHTML;
}


