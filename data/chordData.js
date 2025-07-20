// Chord data definitions
export const chordData = {
    // Basic chord definitions (natural notes)
    'C': { root: 'C', quality: 'major', notes: ['C', 'E', 'G'] },
    'Cm': { root: 'C', quality: 'minor', notes: ['C', 'Eb', 'G'] },
    'C7': { root: 'C', quality: 'dominant7', notes: ['C', 'E', 'G', 'Bb'] },
    'Cmaj7': { root: 'C', quality: 'major7', notes: ['C', 'E', 'G', 'B'] },
    'Cm7': { root: 'C', quality: 'minor7', notes: ['C', 'Eb', 'G', 'Bb'] },
    'Cdim': { root: 'C', quality: 'diminished', notes: ['C', 'Eb', 'Gb'] },
    'Caug': { root: 'C', quality: 'augmented', notes: ['C', 'E', 'G#'] },
    
    'D': { root: 'D', quality: 'major', notes: ['D', 'F#', 'A'] },
    'Dm': { root: 'D', quality: 'minor', notes: ['D', 'F', 'A'] },
    'D7': { root: 'D', quality: 'dominant7', notes: ['D', 'F#', 'A', 'C'] },
    'Dmaj7': { root: 'D', quality: 'major7', notes: ['D', 'F#', 'A', 'C#'] },
    'Dm7': { root: 'D', quality: 'minor7', notes: ['D', 'F', 'A', 'C'] },
    
    'E': { root: 'E', quality: 'major', notes: ['E', 'G#', 'B'] },
    'Em': { root: 'E', quality: 'minor', notes: ['E', 'G', 'B'] },
    'E7': { root: 'E', quality: 'dominant7', notes: ['E', 'G#', 'B', 'D'] },
    'Emaj7': { root: 'E', quality: 'major7', notes: ['E', 'G#', 'B', 'D#'] },
    'Em7': { root: 'E', quality: 'minor7', notes: ['E', 'G', 'B', 'D'] },
    
    'F': { root: 'F', quality: 'major', notes: ['F', 'A', 'C'] },
    'Fm': { root: 'F', quality: 'minor', notes: ['F', 'Ab', 'C'] },
    'F7': { root: 'F', quality: 'dominant7', notes: ['F', 'A', 'C', 'Eb'] },
    'Fmaj7': { root: 'F', quality: 'major7', notes: ['F', 'A', 'C', 'E'] },
    'Fm7': { root: 'F', quality: 'minor7', notes: ['F', 'Ab', 'C', 'Eb'] },
    
    'G': { root: 'G', quality: 'major', notes: ['G', 'B', 'D'] },
    'Gm': { root: 'G', quality: 'minor', notes: ['G', 'Bb', 'D'] },
    'G7': { root: 'G', quality: 'dominant7', notes: ['G', 'B', 'D', 'F'] },
    'Gmaj7': { root: 'G', quality: 'major7', notes: ['G', 'B', 'D', 'F#'] },
    'Gm7': { root: 'G', quality: 'minor7', notes: ['G', 'Bb', 'D', 'F'] },
    
    'A': { root: 'A', quality: 'major', notes: ['A', 'C#', 'E'] },
    'Am': { root: 'A', quality: 'minor', notes: ['A', 'C', 'E'] },
    'A7': { root: 'A', quality: 'dominant7', notes: ['A', 'C#', 'E', 'G'] },
    'Amaj7': { root: 'A', quality: 'major7', notes: ['A', 'C#', 'E', 'G#'] },
    'Am7': { root: 'A', quality: 'minor7', notes: ['A', 'C', 'E', 'G'] },
    
    'B': { root: 'B', quality: 'major', notes: ['B', 'D#', 'F#'] },
    'Bm': { root: 'B', quality: 'minor', notes: ['B', 'D', 'F#'] },
    'B7': { root: 'B', quality: 'dominant7', notes: ['B', 'D#', 'F#', 'A'] },
    'Bmaj7': { root: 'B', quality: 'major7', notes: ['B', 'D#', 'F#', 'A#'] },
    'Bm7': { root: 'B', quality: 'minor7', notes: ['B', 'D', 'F#', 'A'] },
    
    // Sharp chords
    'C#': { root: 'C#', quality: 'major', notes: ['C#', 'F', 'G#'] },
    'C#m': { root: 'C#', quality: 'minor', notes: ['C#', 'E', 'G#'] },
    'C#7': { root: 'C#', quality: 'dominant7', notes: ['C#', 'F', 'G#', 'B'] },
    'C#maj7': { root: 'C#', quality: 'major7', notes: ['C#', 'F', 'G#', 'C'] },
    'C#m7': { root: 'C#', quality: 'minor7', notes: ['C#', 'E', 'G#', 'B'] },
    
    'D#': { root: 'D#', quality: 'major', notes: ['D#', 'G', 'A#'] },
    'D#m': { root: 'D#', quality: 'minor', notes: ['D#', 'F#', 'A#'] },
    'D#7': { root: 'D#', quality: 'dominant7', notes: ['D#', 'G', 'A#', 'C#'] },
    'D#maj7': { root: 'D#', quality: 'major7', notes: ['D#', 'G', 'A#', 'D'] },
    'D#m7': { root: 'D#', quality: 'minor7', notes: ['D#', 'F#', 'A#', 'C#'] },
    
    'F#': { root: 'F#', quality: 'major', notes: ['F#', 'A#', 'C#'] },
    'F#m': { root: 'F#', quality: 'minor', notes: ['F#', 'A', 'C#'] },
    'F#7': { root: 'F#', quality: 'dominant7', notes: ['F#', 'A#', 'C#', 'E'] },
    'F#maj7': { root: 'F#', quality: 'major7', notes: ['F#', 'A#', 'C#', 'F'] },
    'F#m7': { root: 'F#', quality: 'minor7', notes: ['F#', 'A', 'C#', 'E'] },
    
    'G#': { root: 'G#', quality: 'major', notes: ['G#', 'C', 'D#'] },
    'G#m': { root: 'G#', quality: 'minor', notes: ['G#', 'B', 'D#'] },
    'G#7': { root: 'G#', quality: 'dominant7', notes: ['G#', 'C', 'D#', 'F#'] },
    'G#maj7': { root: 'G#', quality: 'major7', notes: ['G#', 'C', 'D#', 'G'] },
    'G#m7': { root: 'G#', quality: 'minor7', notes: ['G#', 'B', 'D#', 'F#'] },
    
    'A#': { root: 'A#', quality: 'major', notes: ['A#', 'D', 'F'] },
    'A#m': { root: 'A#', quality: 'minor', notes: ['A#', 'C#', 'F'] },
    'A#7': { root: 'A#', quality: 'dominant7', notes: ['A#', 'D', 'F', 'G#'] },
    'A#maj7': { root: 'A#', quality: 'major7', notes: ['A#', 'D', 'F', 'A'] },
    'A#m7': { root: 'A#', quality: 'minor7', notes: ['A#', 'C#', 'F', 'G#'] },
    
    // Flat chords (enharmonic equivalents)
    'Db': { root: 'Db', quality: 'major', notes: ['Db', 'F', 'Ab'] },
    'Dbm': { root: 'Db', quality: 'minor', notes: ['Db', 'E', 'Ab'] },
    'Db7': { root: 'Db', quality: 'dominant7', notes: ['Db', 'F', 'Ab', 'B'] },
    'Dbmaj7': { root: 'Db', quality: 'major7', notes: ['Db', 'F', 'Ab', 'C'] },
    'Dbm7': { root: 'Db', quality: 'minor7', notes: ['Db', 'E', 'Ab', 'B'] },
    
    'Eb': { root: 'Eb', quality: 'major', notes: ['Eb', 'G', 'Bb'] },
    'Ebm': { root: 'Eb', quality: 'minor', notes: ['Eb', 'Gb', 'Bb'] },
    'Eb7': { root: 'Eb', quality: 'dominant7', notes: ['Eb', 'G', 'Bb', 'Db'] },
    'Ebmaj7': { root: 'Eb', quality: 'major7', notes: ['Eb', 'G', 'Bb', 'D'] },
    'Ebm7': { root: 'Eb', quality: 'minor7', notes: ['Eb', 'Gb', 'Bb', 'Db'] },
    
    'Gb': { root: 'Gb', quality: 'major', notes: ['Gb', 'Bb', 'Db'] },
    'Gbm': { root: 'Gb', quality: 'minor', notes: ['Gb', 'A', 'Db'] },
    'Gb7': { root: 'Gb', quality: 'dominant7', notes: ['Gb', 'Bb', 'Db', 'E'] },
    'Gbmaj7': { root: 'Gb', quality: 'major7', notes: ['Gb', 'Bb', 'Db', 'F'] },
    'Gbm7': { root: 'Gb', quality: 'minor7', notes: ['Gb', 'A', 'Db', 'E'] },
    
    'Ab': { root: 'Ab', quality: 'major', notes: ['Ab', 'C', 'Eb'] },
    'Abm': { root: 'Ab', quality: 'minor', notes: ['Ab', 'B', 'Eb'] },
    'Ab7': { root: 'Ab', quality: 'dominant7', notes: ['Ab', 'C', 'Eb', 'Gb'] },
    'Abmaj7': { root: 'Ab', quality: 'major7', notes: ['Ab', 'C', 'Eb', 'G'] },
    'Abm7': { root: 'Ab', quality: 'minor7', notes: ['Ab', 'B', 'Eb', 'Gb'] },
    
    'Bb': { root: 'Bb', quality: 'major', notes: ['Bb', 'D', 'F'] },
    'Bbm': { root: 'Bb', quality: 'minor', notes: ['Bb', 'Db', 'F'] },
    'Bb7': { root: 'Bb', quality: 'dominant7', notes: ['Bb', 'D', 'F', 'Ab'] },
    'Bbmaj7': { root: 'Bb', quality: 'major7', notes: ['Bb', 'D', 'F', 'A'] },
    'Bbm7': { root: 'Bb', quality: 'minor7', notes: ['Bb', 'Db', 'F', 'Ab'] }
}; 