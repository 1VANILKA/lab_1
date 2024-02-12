function Result() {
    
    let inputElement = document.getElementById('School_arr');
    
    let numbers = inputElement.value.split(',');
    
    let num_even = numbers.filter((num) => num % 2 == 0 && !isNaN(num));
    let num_odd = numbers.filter((num) => num % 2 != 0 && !isNaN(num));
    let avg_even = num_even.length > 0 ? num_even.reduce((acc, num) => acc + parseInt(num), 0) / num_even.length : 0;
    let avg_odd = num_odd.length > 0 ? num_odd.reduce((acc, num) => acc + parseInt(num), 0) / num_odd.length : 0;

    document.getElementById('avg_even').innerHTML = `Even: ${avg_even}`;
    document.getElementById('avg_odd').innerHTML = `Odd: ${avg_odd}`;
}
