// Main application script
import { parseChords, convertToJazz, generateChordDiagram } from './utils/chordUtils.js';
import { chordTips } from './data/chordTips.js';

// Initialize the converter
class JazzChordConverter {
    constructor() {
        this.jazzVoicings = {
            // Drop 2 voicings
            drop2: {
                major: ['maj7', '6', 'maj9'],
                minor: ['m7', 'm6', 'm9'],
                dominant: ['7', '9', '13'],
                diminished: ['m7b5', 'dim7']
            },
            // Drop 3 voicings
            drop3: {
                major: ['maj7', '6', 'maj9'],
                minor: ['m7', 'm6', 'm9'],
                dominant: ['7', '9', '13'],
                diminished: ['m7b5', 'dim7']
            },
            // Close voicings
            close: {
                major: ['maj7', '6', 'maj9'],
                minor: ['m7', 'm6', 'm9'],
                dominant: ['7', '9', '13'],
                diminished: ['m7b5', 'dim7']
            },
            // Shell voicings
            shell: {
                major: ['maj7', '6'],
                minor: ['m7', 'm6'],
                dominant: ['7', '9'],
                diminished: ['m7b5']
            }
        };
    }

    // Get chord information and tips
    getChordInfo(chordName) {
        return chordTips[chordName] || 'A beautiful jazz voicing. Experiment with different fingerings and explore the rich harmonic possibilities.';
    }
}

// Initialize the converter
const converter = new JazzChordConverter();

// DOM elements
const chordInput = document.getElementById('chordInput');
const complexitySelect = document.getElementById('complexity');
const voicingSelect = document.getElementById('voicing');
const convertBtn = document.getElementById('convertBtn');
const resultsSection = document.getElementById('resultsSection');
const resultsContainer = document.getElementById('results');

// Event listeners
convertBtn.addEventListener('click', convertChords);
chordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && e.ctrlKey) {
        convertChords();
    }
});

// Main conversion function
function convertChords() {
    const input = chordInput.value.trim();
    if (!input) {
        alert('Please enter some chords to convert!');
        return;
    }

    // Show loading state
    convertBtn.innerHTML = '<span class="loading"></span> Converting...';
    convertBtn.disabled = true;

    // Simulate processing time for better UX
    setTimeout(() => {
        const chords = parseChords(input);
        
        if (chords.length === 0) {
            alert('No valid chords found. Please enter chords like: C, Am, F, G7, etc.');
            convertBtn.innerHTML = 'Jazz up!';
            convertBtn.disabled = false;
            return;
        }

        const complexity = complexitySelect.value;
        const voicing = voicingSelect.value;
        
        displayResults(chords, complexity, voicing);
        
        // Reset button
        convertBtn.innerHTML = 'Jazz up!';
        convertBtn.disabled = false;
    }, 500);
}

// Display results
function displayResults(chords, complexity, voicing) {
    resultsContainer.innerHTML = '';
    
    if (chords.length === 0) {
        resultsContainer.innerHTML = '<p style="text-align: center; color: #b8c5d6; font-style: italic;">Enter some chords to see jazz suggestions!</p>';
        return;
    }
    
    chords.forEach((chord, index) => {
        const jazzChord = convertToJazz(chord, voicing, complexity);
        const diagram = generateChordDiagram(jazzChord, complexity, voicing);
        const info = converter.getChordInfo(jazzChord);
        
        const chordCard = document.createElement('div');
        chordCard.className = 'chord-card';
        chordCard.innerHTML = `
            <div class="chord-header">
                <span class="original-chord">${chord.root}${chord.quality === 'major' ? '' : chord.quality === 'minor' ? 'm' : chord.quality === 'dominant7' ? '7' : ''}</span>
                <span class="jazz-chord">${jazzChord}</span>
            </div>
            ${diagram}
            <div class="chord-info">
                <h4>Jazz Tips:</h4>
                <p>${info}</p>
            </div>
        `;
        
        resultsContainer.appendChild(chordCard);
    });
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    // App is ready!
}); 