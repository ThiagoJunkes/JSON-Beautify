// Compare functionality
const compareBtn = document.getElementById('compare-btn');
const jsonCompareInput1 = document.getElementById('json-compare-input-1');
const jsonCompareInput2 = document.getElementById('json-compare-input-2');
const compareResult = document.getElementById('compare-result');

compareBtn.addEventListener('click', () => {
    try {
        const json1 = JSON.parse(jsonCompareInput1.value);
        const json2 = JSON.parse(jsonCompareInput2.value);
        const differences = findDifferences(json1, json2);
        compareResult.innerHTML = differences;
    } catch (error) {
        compareResult.innerHTML = '<span class="diff">Invalid JSON input!</span>';
    }
});

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
    if(input.trim() != ''){
        const beautified = processJSON(input);
        document.getElementById('json-output').value = beautified;
    }
});

document.getElementById('clear-beautify-btn').addEventListener('click', () => {
    document.getElementById('json-input').value = '';
    document.getElementById('json-output').value = '';
});
