function processJSON(input) {
    let tabIndex = 0;
    
    let formatted = input.replace(/\{/g, '{\n')
                         .replace(/\[/g, '[\n')
                         .replace(/,/g, ',\n')
                         .replace(/\}/g, '\n}')
                         .replace(/\]/g, '\n]');

    let json = '';
    const lines = formatted.split('\n');
    lines.forEach((line) => {
        if (line.includes('}') || line.includes(']')) tabIndex--;
        json += '   '.repeat(tabIndex) + line + '\n';
    
        if (line.includes('{') || line.includes('[')) tabIndex++;
    });

    return json; 
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
