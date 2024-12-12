function findDifferences(obj1, obj2, path = '') {
    let result = '';
    for (const key in obj1) {
        const newPath = path ? `${path}.${key}` : key;
        if (!(key in obj2)) {
            result += `<span class="diff">${newPath}: Missing in JSON 2</span>\n`;
        } else if (JSON.stringify(obj1[key]) !== JSON.stringify(obj2[key])) {
            result += `<span class="diff">${newPath}: Different values</span>\n`;
        }
    }
    for (const key in obj2) {
        const newPath = path ? `${path}.${key}` : key;
        if (!(key in obj1)) {
            result += `<span class="diff">${newPath}: Missing in JSON 1</span>\n`;
        }
    }
    return result || 'JSONs are identical.';
}