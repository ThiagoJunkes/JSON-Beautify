function processJSON(input) {

    return input; 
}

document.getElementById('beautify-btn').addEventListener('click', () => {
    const input = document.getElementById('json-input').value;
    const beautified = processJSON(input);
    document.getElementById('json-output').value = beautified;
});

document.getElementById('clear-btn').addEventListener('click', () => {
    document.getElementById('json-input').value = '';
    document.getElementById('json-output').value = '';
});
