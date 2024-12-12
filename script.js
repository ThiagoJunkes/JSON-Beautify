// Tabs switching logic
const beautifyTab = document.getElementById('beautify-tab');
const compareTab = document.getElementById('compare-tab');
const beautifyScreen = document.getElementById('beautify-screen');
const compareScreen = document.getElementById('compare-screen');

beautifyTab.addEventListener('click', () => {
    beautifyTab.classList.add('active');
    compareTab.classList.remove('active');
    beautifyScreen.classList.remove('hidden');
    compareScreen.classList.add('hidden');
});

compareTab.addEventListener('click', () => {
    compareTab.classList.add('active');
    beautifyTab.classList.remove('active');
    compareScreen.classList.remove('hidden');
    beautifyScreen.classList.add('hidden');
});
