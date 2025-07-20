// Utility functions for chord processing
import { chordData } from '../data/chordData.js';
import { fretboardPositions } from '../data/fretboardPositions.js';

// Parse chord input and return chord objects
export function parseChords(input) {
    // Handle single chord input
    if (!input.trim()) {
        return [];
    }
    
    const chords = input.trim().split(/\s+/);
    return chords.map(chord => {
        const cleanChord = chord.replace(/[^\w#b]/g, '');
        const chordDataObj = chordData[cleanChord];
        
        if (!chordDataObj) {
            console.log(`Chord not found: ${cleanChord}`);
            return null;
        }
        
        return chordDataObj;
    }).filter(chord => chord !== null);
}

// Convert basic chord to jazz voicing
export function convertToJazz(chord, voicingType, complexity) {
    const root = chord.root;
    const quality = chord.quality;
    
    let jazzChord = root;
    
    // Define voicing-specific chord extensions
    const voicingExtensions = {
        drop2: {
            basic: {
                major: 'maj7',
                minor: 'm7',
                dominant7: '9'
            },
            intermediate: {
                major: 'maj9',
                minor: 'm9',
                dominant7: '13'
            },
            advanced: {
                major: 'maj13',
                minor: 'm11',
                dominant7: '13b9'
            }
        },
        drop3: {
            basic: {
                major: 'maj7',
                minor: 'm7',
                dominant7: '9'
            },
            intermediate: {
                major: 'maj9',
                minor: 'm9',
                dominant7: '13'
            },
            advanced: {
                major: 'maj13',
                minor: 'm11',
                dominant7: '13b9'
            }
        },
        close: {
            basic: {
                major: 'maj7',
                minor: 'm7',
                dominant7: '9'
            },
            intermediate: {
                major: 'maj9',
                minor: 'm9',
                dominant7: '13'
            },
            advanced: {
                major: 'maj13',
                minor: 'm11',
                dominant7: '13b9'
            }
        },
        shell: {
            basic: {
                major: 'maj7',
                minor: 'm7',
                dominant7: '7'
            },
            intermediate: {
                major: 'maj7',
                minor: 'm7',
                dominant7: '9'
            },
            advanced: {
                major: 'maj7',
                minor: 'm7',
                dominant7: '13'
            }
        }
    };
    
    // Get the appropriate extension based on voicing and complexity
    const extensions = voicingExtensions[voicingType] || voicingExtensions.drop2;
    const complexityExtensions = extensions[complexity] || extensions.basic;
    
    // Add the appropriate extension
    jazzChord += complexityExtensions[quality] || 'maj7';
    
    return jazzChord;
}

// Get fallback chords when exact chord not found
export function getFallbackChord(chordName) {
    // For extended chords, we want to show different voicings, not just fall back to basic chords
    // This creates more variety in the diagrams
    const fallbacks = {
        // Major 9th -> Try different major 9th voicings or maj7
        'Cmaj9': ['Cmaj9', 'Cmaj7'],
        'Dmaj9': ['Dmaj9', 'Dmaj7'],
        'Emaj9': ['Emaj9', 'Emaj7'],
        'Fmaj9': ['Fmaj9', 'Fmaj7'],
        'Gmaj9': ['Gmaj9', 'Gmaj7'],
        'Amaj9': ['Amaj9', 'Amaj7'],
        'Bmaj9': ['Bmaj9', 'Bmaj7'],
        
        // Minor 9th -> Try different minor 9th voicings or m7
        'Cm9': ['Cm9', 'Cm7'],
        'Dm9': ['Dm9', 'Dm7'],
        'Em9': ['Em9', 'Em7'],
        'Fm9': ['Fm9', 'Fm7'],
        'Gm9': ['Gm9', 'Gm7'],
        'Am9': ['Am9', 'Am7'],
        'Bm9': ['Bm9', 'Bm7'],
        
        // Dominant 9th -> Try different dominant 9th voicings or 7
        'C9': ['C9', 'C7'],
        'D9': ['D9', 'D7'],
        'E9': ['E9', 'E7'],
        'F9': ['F9', 'F7'],
        'G9': ['G9', 'G7'],
        'A9': ['A9', 'A7'],
        'B9': ['B9', 'B7'],
        
        // Major 13th -> Try different major 13th voicings or maj7
        'Cmaj13': ['Cmaj13', 'Cmaj7'],
        'Dmaj13': ['Dmaj13', 'Dmaj7'],
        'Emaj13': ['Emaj13', 'Emaj7'],
        'Fmaj13': ['Fmaj13', 'Fmaj7'],
        'Gmaj13': ['Gmaj13', 'Gmaj7'],
        'Amaj13': ['Amaj13', 'Amaj7'],
        'Bmaj13': ['Bmaj13', 'Bmaj7'],
        
        // Minor 11th -> Try different minor 11th voicings or m7
        'Cm11': ['Cm11', 'Cm7'],
        'Dm11': ['Dm11', 'Dm7'],
        'Em11': ['Em11', 'Em7'],
        'Fm11': ['Fm11', 'Fm7'],
        'Gm11': ['Gm11', 'Gm7'],
        'Am11': ['Am11', 'Am7'],
        'Bm11': ['Bm11', 'Bm7'],
        
        // Dominant 13th -> Try different dominant 13th voicings or 7
        'C13': ['C13', 'C7'],
        'D13': ['D13', 'D7'],
        'E13': ['E13', 'E7'],
        'F13': ['F13', 'F7'],
        'G13': ['G13', 'G7'],
        'A13': ['A13', 'A7'],
        'B13': ['B13', 'B7'],
        
        // Dominant 13b9 -> Try different dominant 13b9 voicings or 7
        'C13b9': ['C13b9', 'C7'],
        'D13b9': ['D13b9', 'D7'],
        'E13b9': ['E13b9', 'E7'],
        'F13b9': ['F13b9', 'F7'],
        'G13b9': ['G13b9', 'G7'],
        'A13b9': ['A13b9', 'A7'],
        'B13b9': ['B13b9', 'B7']
    };
    
    return fallbacks[chordName] || [];
}

// Generate chord diagram HTML
export function generateChordDiagram(chordName, complexity = 'basic', voicingType = 'drop2') {
    let positions = fretboardPositions[chordName] || [];
    
    // If exact chord not found, try to find a similar chord
    if (positions.length === 0) {
        // Try to find a simpler version of the chord
        const fallbackChords = getFallbackChord(chordName);
        for (const fallbackChord of fallbackChords) {
            positions = fretboardPositions[fallbackChord] || [];
            if (positions.length > 0) {
                break;
            }
        }
    }
    
    if (positions.length === 0) {
        return generateGenericDiagram(chordName);
    }
    
    // Select position based on complexity and voicing type
    let positionIndex = 0;
    
    // For different voicing types, use different positions
    if (voicingType === 'drop2') {
        positionIndex = 0; // Use first position for drop 2
    } else if (voicingType === 'drop3') {
        positionIndex = Math.min(1, positions.length - 1); // Use second position for drop 3
    } else if (voicingType === 'close') {
        positionIndex = Math.min(2, positions.length - 1); // Use third position for close voicing
    } else if (voicingType === 'shell') {
        positionIndex = 0; // Use first position for shell voicing
    }
    
    // For extended chords, adjust based on complexity
    if (complexity === 'intermediate' && (chordName.includes('9') || chordName.includes('11') || chordName.includes('13'))) {
        positionIndex = Math.min(positionIndex + 1, positions.length - 1);
    } else if (complexity === 'advanced' && (chordName.includes('9') || chordName.includes('11') || chordName.includes('13'))) {
        positionIndex = Math.min(positionIndex + 2, positions.length - 1);
    }
    
    const position = positions[positionIndex];
    let frets;
    
    // Handle both space-separated and continuous string formats
    if (position.position.includes(' ')) {
        frets = position.position.split(' ');
    } else {
        frets = position.position.split('');
    }
    
    let diagramHTML = '<div class="chord-diagram">';
    diagramHTML += '<div class="fretboard">';
    diagramHTML += '<div class="strings">';
    
    // Guitar strings from low E to high E
    const strings = ['E', 'A', 'D', 'G', 'B', 'E'];
    
    strings.forEach((string, index) => {
        diagramHTML += '<div class="string">';
        diagramHTML += `<div class="fret-label">${string}</div>`;
        
        // Generate 6 frets
        for (let fret = 0; fret <= 5; fret++) {
            const fretValue = frets[index];
            let fretClass = 'fret';
            let fretContent = '';
            
            if (fretValue === 'x' || fretValue === 'X') {
                fretClass += ' muted';
                fretContent = '✕';
            } else if (fretValue === '0' || fretValue === 'o') {
                fretClass += ' open';
                fretContent = '○';
            } else if (fret === 0 && fretValue !== 'x' && fretValue !== 'X') {
                // Show the fret value in the first fret position
                fretContent = fretValue;
            }
            
            diagramHTML += `<div class="${fretClass}">${fretContent}</div>`;
        }
        
        diagramHTML += '</div>';
    });
    
    diagramHTML += '</div>';
    diagramHTML += '</div>';
    diagramHTML += `<p class="chord-info"><strong>${position.description}</strong></p>`;
    diagramHTML += '</div>';
    
    return diagramHTML;
}

// Generate generic diagram for chords not in our database
export function generateGenericDiagram(chordName) {
    return `
        <div class="chord-diagram">
            <div class="fretboard">
                <div class="strings">
                    <div class="string">
                        <div class="fret-label">E</div>
                        <div class="fret muted">✕</div>
                        <div class="fret"></div>
                        <div class="fret"></div>
                        <div class="fret"></div>
                        <div class="fret"></div>
                        <div class="fret"></div>
                    </div>
                    <div class="string">
                        <div class="fret-label">A</div>
                        <div class="fret"></div>
                        <div class="fret"></div>
                        <div class="fret"></div>
                        <div class="fret"></div>
                        <div class="fret"></div>
                        <div class="fret"></div>
                    </div>
                    <div class="string">
                        <div class="fret-label">D</div>
                        <div class="fret"></div>
                        <div class="fret"></div>
                        <div class="fret"></div>
                        <div class="fret"></div>
                        <div class="fret"></div>
                        <div class="fret"></div>
                    </div>
                    <div class="string">
                        <div class="fret-label">G</div>
                        <div class="fret"></div>
                        <div class="fret"></div>
                        <div class="fret"></div>
                        <div class="fret"></div>
                        <div class="fret"></div>
                        <div class="fret"></div>
                    </div>
                    <div class="string">
                        <div class="fret-label">B</div>
                        <div class="fret"></div>
                        <div class="fret"></div>
                        <div class="fret"></div>
                        <div class="fret"></div>
                        <div class="fret"></div>
                        <div class="fret"></div>
                    </div>
                    <div class="string">
                        <div class="fret-label">E</div>
                        <div class="fret"></div>
                        <div class="fret"></div>
                        <div class="fret"></div>
                        <div class="fret"></div>
                        <div class="fret"></div>
                        <div class="fret"></div>
                    </div>
                </div>
            </div>
            <p class="chord-info"><strong>${chordName} - Use standard jazz voicing</strong></p>
        </div>
    `;
} 