const OUTPUT_ELEMENT = document.getElementById('output');
const FLICKER_COUNT = 5; // Number of random transitions per character
const FLICKER_DELAY = 50; // Time between character changes in ms
const TYPE_DELAY = 100; // Time between revealing correct characters in ms

async function fetchWords() {
    try {
        const response = await fetch('../data/names.txt');
        const text = await response.text();
        return text.split('\n')
                   .map(line => line.trim())
                   .filter(line => line.length > 0);
    } catch (error) {
        console.error('Error loading words:', error);
        return [];
    }
}

function getRandomChar() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*';
    return characters[Math.floor(Math.random() * characters.length)];
}

async function typeWithEffect(word) {
    OUTPUT_ELEMENT.textContent = ''; // Clear previous content
    const characters = word.split('');
    let currentText = [];

    for (let i = 0; i < characters.length; i++) {
        currentText[i] = ' ';
        
        // Create flicker effect for current character
        for (let j = 0; j < FLICKER_COUNT; j++) {
            currentText[i] = getRandomChar();
            OUTPUT_ELEMENT.textContent = currentText.join('');
            await new Promise(resolve => setTimeout(resolve, FLICKER_DELAY));
        }

        // Reveal correct character
        currentText[i] = characters[i];
        OUTPUT_ELEMENT.textContent = currentText.join('');
        await new Promise(resolve => setTimeout(resolve, TYPE_DELAY));
    }
}

async function startEffect() {
    const words = await fetchWords();
    if (words.length === 0) return;

    while (true) {
        const randomWord = words[Math.floor(Math.random() * words.length)];
        await typeWithEffect(randomWord);
        await new Promise(resolve => setTimeout(resolve, 1500)); // Pause between words
    }
}

// Start the effect when loaded
document.addEventListener('DOMContentLoaded', startEffect);