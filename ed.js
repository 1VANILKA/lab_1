function Result() {
    let text = document.getElementById('my_text').value;
    let words = text.split(' ');
    let longestWord = words[0];
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    document.getElementById('longest_word').innerHTML = longestWord;
    document.getElementById('longest_word_len').innerHTML = longestWord.length;
}