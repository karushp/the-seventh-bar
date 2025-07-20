// Fretboard positions for jazz chords
export const fretboardPositions = {
    // Common jazz chord shapes with finger positions
    'Cmaj7': [
        { position: 'x32000', description: 'C major 7 (Drop 2)' },
        { position: '8 10 9 9 8 8', description: 'C major 7 (Drop 3)' },
        { position: '3 5 5 5 3 3', description: 'C major 7 (Close)' },
        { position: 'x32000', description: 'C major 7 (Shell)' }
    ],
    'Cm7': [
        { position: 'x35343', description: 'C minor 7 (Drop 2)' },
        { position: '8 10 8 8 8 8', description: 'C minor 7 (Drop 3)' },
        { position: '3 5 3 5 3 3', description: 'C minor 7 (Close)' },
        { position: 'x35343', description: 'C minor 7 (Shell)' }
    ],
    'C7': [
        { position: 'x32310', description: 'C dominant 7 (Drop 2)' },
        { position: '8 10 8 9 8 8', description: 'C dominant 7 (Drop 3)' },
        { position: '3 5 3 5 3 3', description: 'C dominant 7 (Close)' },
        { position: 'x32310', description: 'C dominant 7 (Shell)' }
    ],
    'Dmaj7': [
        { position: 'xx0222', description: 'Open D major 7' },
        { position: '10 12 12 11 10 10', description: 'Barre D major 7' },
        { position: '5 7 7 7 5 5', description: 'D major 7 shape' }
    ],
    'Dm7': [
        { position: 'xx0211', description: 'Open D minor 7' },
        { position: '10 12 10 10 10 10', description: 'Barre D minor 7' },
        { position: '5 7 5 7 5 5', description: 'D minor 7 shape' }
    ],
    'D7': [
        { position: 'xx0212', description: 'Open D dominant 7' },
        { position: '10 12 10 11 10 10', description: 'Barre D dominant 7' },
        { position: '5 7 5 7 5 5', description: 'D dominant 7 shape' }
    ],
    'Emaj7': [
        { position: '022100', description: 'Open E major 7' },
        { position: '12 14 14 13 12 12', description: 'Barre E major 7' },
        { position: '7 9 9 8 7 7', description: 'E major 7 shape' }
    ],
    'Em7': [
        { position: '022030', description: 'Open E minor 7' },
        { position: '12 14 12 12 12 12', description: 'Barre E minor 7' },
        { position: '7 9 7 9 7 7', description: 'E minor 7 shape' }
    ],
    'E7': [
        { position: '020100', description: 'Open E dominant 7' },
        { position: '12 14 12 13 12 12', description: 'Barre E dominant 7' },
        { position: '7 9 7 9 7 7', description: 'E dominant 7 shape' }
    ],
    'Fmaj7': [
        { position: 'xx3210', description: 'Open F major 7' },
        { position: '1 3 3 2 1 1', description: 'Barre F major 7' },
        { position: '8 10 10 9 8 8', description: 'F major 7 shape' }
    ],
    'Fm7': [
        { position: 'xx1111', description: 'Open F minor 7' },
        { position: '1 3 1 1 1 1', description: 'Barre F minor 7' },
        { position: '8 10 8 8 8 8', description: 'F minor 7 shape' }
    ],
    'F7': [
        { position: 'xx1210', description: 'Open F dominant 7' },
        { position: '1 3 1 2 1 1', description: 'Barre F dominant 7' },
        { position: '8 10 8 9 8 8', description: 'F dominant 7 shape' }
    ],
    'Gmaj7': [
        { position: '320002', description: 'Open G major 7' },
        { position: '3 5 5 4 3 3', description: 'Barre G major 7' },
        { position: '10 12 12 11 10 10', description: 'G major 7 shape' }
    ],
    'Gm7': [
        { position: '353333', description: 'Open G minor 7' },
        { position: '3 5 3 3 3 3', description: 'Barre G minor 7' },
        { position: '10 12 10 10 10 10', description: 'G minor 7 shape' }
    ],
    'G7': [
        { position: '320001', description: 'Open G dominant 7' },
        { position: '3 5 3 4 3 3', description: 'Barre G dominant 7' },
        { position: '10 12 10 11 10 10', description: 'G dominant 7 shape' }
    ],
    'Amaj7': [
        { position: 'x02120', description: 'Open A major 7' },
        { position: '5 7 7 6 5 5', description: 'Barre A major 7' },
        { position: '12 14 14 13 12 12', description: 'A major 7 shape' }
    ],
    'Am7': [
        { position: 'x02010', description: 'Open A minor 7' },
        { position: '5 7 5 5 5 5', description: 'Barre A minor 7' },
        { position: '12 14 12 12 12 12', description: 'A minor 7 shape' }
    ],
    'A7': [
        { position: 'x02020', description: 'Open A dominant 7' },
        { position: '5 7 5 6 5 5', description: 'Barre A dominant 7' },
        { position: '12 14 12 13 12 12', description: 'A dominant 7 shape' }
    ],
    'Bmaj7': [
        { position: 'x24142', description: 'Open B major 7' },
        { position: '7 9 9 8 7 7', description: 'Barre B major 7' },
        { position: '2 4 4 3 2 2', description: 'B major 7 shape' }
    ],
    'Bm7': [
        { position: 'x20202', description: 'Open B minor 7' },
        { position: '7 9 7 7 7 7', description: 'Barre B minor 7' },
        { position: '2 4 2 2 2 2', description: 'B minor 7 shape' }
    ],
    'B7': [
        { position: 'x21202', description: 'Open B dominant 7' },
        { position: '7 9 7 8 7 7', description: 'Barre B dominant 7' },
        { position: '2 4 2 3 2 2', description: 'B dominant 7 shape' }
    ],
    
    // Sharp chord positions
    'C#maj7': [
        { position: 'x43111', description: 'C# major 7' },
        { position: '9 11 11 10 9 9', description: 'Barre C# major 7' }
    ],
    'C#m7': [
        { position: 'x46444', description: 'C# minor 7' },
        { position: '9 11 9 9 9 9', description: 'Barre C# minor 7' }
    ],
    'C#7': [
        { position: 'x46464', description: 'C# dominant 7' },
        { position: '9 11 9 10 9 9', description: 'Barre C# dominant 7' }
    ],
    
    'F#maj7': [
        { position: '2 4 4 3 2 2', description: 'F# major 7' },
        { position: '9 11 11 10 9 9', description: 'Barre F# major 7' }
    ],
    'F#m7': [
        { position: '2 4 2 2 2 2', description: 'F# minor 7' },
        { position: '9 11 9 9 9 9', description: 'Barre F# minor 7' }
    ],
    'F#7': [
        { position: '2 4 2 3 2 2', description: 'F# dominant 7' },
        { position: '9 11 9 10 9 9', description: 'Barre F# dominant 7' }
    ],
    
    // Flat chord positions
    'Dbmaj7': [
        { position: 'x43111', description: 'Db major 7' },
        { position: '9 11 11 10 9 9', description: 'Barre Db major 7' }
    ],
    'Dbm7': [
        { position: 'x46444', description: 'Db minor 7' },
        { position: '9 11 9 9 9 9', description: 'Barre Db minor 7' }
    ],
    'Db7': [
        { position: 'x46464', description: 'Db dominant 7' },
        { position: '9 11 9 10 9 9', description: 'Barre Db dominant 7' }
    ],
    
    'Ebmaj7': [
        { position: 'x65333', description: 'Eb major 7' },
        { position: '6 8 8 7 6 6', description: 'Barre Eb major 7' }
    ],
    'Ebm7': [
        { position: 'x68666', description: 'Eb minor 7' },
        { position: '6 8 6 6 6 6', description: 'Barre Eb minor 7' }
    ],
    'Eb7': [
        { position: 'x68686', description: 'Eb dominant 7' },
        { position: '6 8 6 7 6 6', description: 'Barre Eb dominant 7' }
    ],
    
    'Bbmaj7': [
        { position: 'x13231', description: 'Bb major 7' },
        { position: '6 8 8 7 6 6', description: 'Barre Bb major 7' }
    ],
    'Bbm7': [
        { position: 'x13131', description: 'Bb minor 7' },
        { position: '6 8 6 6 6 6', description: 'Barre Bb minor 7' }
    ],
    'Bb7': [
        { position: 'x13141', description: 'Bb dominant 7' },
        { position: '6 8 6 7 6 6', description: 'Barre Bb dominant 7' }
    ],
    
    // Extended jazz chords (9th, 11th, 13th)
                'Cmaj9': [
                { position: 'x32030', description: 'C major 9 (open)' },
                { position: '8 10 9 9 8 8', description: 'C major 9 (barre)' },
                { position: '3 5 5 5 3 3', description: 'C major 9 (shape)' }
            ],
                'Cm9': [
                { position: 'x35353', description: 'C minor 9 (open)' },
                { position: '8 10 8 8 8 8', description: 'C minor 9 (barre)' },
                { position: '3 5 3 5 3 3', description: 'C minor 9 (shape)' }
            ],
                'C9': [
                { position: 'x32330', description: 'C dominant 9 (open)' },
                { position: '8 10 8 9 8 8', description: 'C dominant 9 (barre)' },
                { position: '3 5 3 5 3 3', description: 'C dominant 9 (shape)' }
            ],
                'Cmaj13': [
                { position: 'x32030', description: 'C major 13 (open)' },
                { position: '8 10 9 9 8 8', description: 'C major 13 (barre)' },
                { position: '3 5 5 5 3 3', description: 'C major 13 (shape)' }
            ],
    'Cm11': [
        { position: 'x35353', description: 'C minor 11' },
        { position: '8 10 8 8 8 8', description: 'Barre C minor 11' }
    ],
    'C13': [
        { position: 'x32330', description: 'C dominant 13' },
        { position: '8 10 8 9 8 8', description: 'Barre C dominant 13' }
    ],
    'C13b9': [
        { position: 'x32330', description: 'C dominant 13b9' },
        { position: '8 10 8 9 8 8', description: 'Barre C dominant 13b9' }
    ],
    
    'Dmaj9': [
        { position: 'xx0220', description: 'D major 9' },
        { position: '10 12 12 11 10 10', description: 'Barre D major 9' }
    ],
    'Dm9': [
        { position: 'xx0210', description: 'D minor 9' },
        { position: '10 12 10 10 10 10', description: 'Barre D minor 9' }
    ],
    'D9': [
        { position: 'xx0210', description: 'D dominant 9' },
        { position: '10 12 10 11 10 10', description: 'Barre D dominant 9' }
    ],
    'Dmaj13': [
        { position: 'xx0220', description: 'D major 13' },
        { position: '10 12 12 11 10 10', description: 'Barre D major 13' }
    ],
    'Dm11': [
        { position: 'xx0210', description: 'D minor 11' },
        { position: '10 12 10 10 10 10', description: 'Barre D minor 11' }
    ],
    'D13': [
        { position: 'xx0210', description: 'D dominant 13' },
        { position: '10 12 10 11 10 10', description: 'Barre D dominant 13' }
    ],
    'D13b9': [
        { position: 'xx0210', description: 'D dominant 13b9' },
        { position: '10 12 10 11 10 10', description: 'Barre D dominant 13b9' }
    ],
    
    'Emaj9': [
        { position: '022100', description: 'E major 9' },
        { position: '12 14 14 13 12 12', description: 'Barre E major 9' }
    ],
    'Em9': [
        { position: '022030', description: 'E minor 9' },
        { position: '12 14 12 12 12 12', description: 'Barre E minor 9' }
    ],
    'E9': [
        { position: '020100', description: 'E dominant 9' },
        { position: '12 14 12 13 12 12', description: 'Barre E dominant 9' }
    ],
    'Emaj13': [
        { position: '022100', description: 'E major 13' },
        { position: '12 14 14 13 12 12', description: 'Barre E major 13' }
    ],
    'Em11': [
        { position: '022030', description: 'E minor 11' },
        { position: '12 14 12 12 12 12', description: 'Barre E minor 11' }
    ],
    'E13': [
        { position: '020100', description: 'E dominant 13' },
        { position: '12 14 12 13 12 12', description: 'Barre E dominant 13' }
    ],
    'E13b9': [
        { position: '020100', description: 'E dominant 13b9' },
        { position: '12 14 12 13 12 12', description: 'Barre E dominant 13b9' }
    ],
    
    'Fmaj9': [
        { position: 'xx3210', description: 'F major 9' },
        { position: '1 3 3 2 1 1', description: 'Barre F major 9' }
    ],
    'Fm9': [
        { position: 'xx1111', description: 'F minor 9' },
        { position: '1 3 1 1 1 1', description: 'Barre F minor 9' }
    ],
    'F9': [
        { position: 'xx1210', description: 'F dominant 9' },
        { position: '1 3 1 2 1 1', description: 'Barre F dominant 9' }
    ],
    'Fmaj13': [
        { position: 'xx3210', description: 'F major 13' },
        { position: '1 3 3 2 1 1', description: 'Barre F major 13' }
    ],
    'Fm11': [
        { position: 'xx1111', description: 'F minor 11' },
        { position: '1 3 1 1 1 1', description: 'Barre F minor 11' }
    ],
    'F13': [
        { position: 'xx1210', description: 'F dominant 13' },
        { position: '1 3 1 2 1 1', description: 'Barre F dominant 13' }
    ],
    'F13b9': [
        { position: 'xx1210', description: 'F dominant 13b9' },
        { position: '1 3 1 2 1 1', description: 'Barre F dominant 13b9' }
    ],
    
    'Gmaj9': [
        { position: '320002', description: 'G major 9' },
        { position: '3 5 5 4 3 3', description: 'Barre G major 9' }
    ],
    'Gm9': [
        { position: '353333', description: 'G minor 9' },
        { position: '3 5 3 3 3 3', description: 'Barre G minor 9' }
    ],
    'G9': [
        { position: '320001', description: 'G dominant 9' },
        { position: '3 5 3 4 3 3', description: 'Barre G dominant 9' }
    ],
    'Gmaj13': [
        { position: '320002', description: 'G major 13' },
        { position: '3 5 5 4 3 3', description: 'Barre G major 13' }
    ],
    'Gm11': [
        { position: '353333', description: 'G minor 11' },
        { position: '3 5 3 3 3 3', description: 'Barre G minor 11' }
    ],
    'G13': [
        { position: '320001', description: 'G dominant 13' },
        { position: '3 5 3 4 3 3', description: 'Barre G dominant 13' }
    ],
    'G13b9': [
        { position: '320001', description: 'G dominant 13b9' },
        { position: '3 5 3 4 3 3', description: 'Barre G dominant 13b9' }
    ],
    
    'Amaj9': [
        { position: 'x02120', description: 'A major 9' },
        { position: '5 7 7 6 5 5', description: 'Barre A major 9' }
    ],
    'Am9': [
        { position: 'x02010', description: 'A minor 9' },
        { position: '5 7 5 5 5 5', description: 'Barre A minor 9' }
    ],
    'A9': [
        { position: 'x02020', description: 'A dominant 9' },
        { position: '5 7 5 6 5 5', description: 'Barre A dominant 9' }
    ],
    'Amaj13': [
        { position: 'x02120', description: 'A major 13' },
        { position: '5 7 7 6 5 5', description: 'Barre A major 13' }
    ],
    'Am11': [
        { position: 'x02010', description: 'A minor 11' },
        { position: '5 7 5 5 5 5', description: 'Barre A minor 11' }
    ],
    'A13': [
        { position: 'x02020', description: 'A dominant 13' },
        { position: '5 7 5 6 5 5', description: 'Barre A dominant 13' }
    ],
    'A13b9': [
        { position: 'x02020', description: 'A dominant 13b9' },
        { position: '5 7 5 6 5 5', description: 'Barre A dominant 13b9' }
    ],
    
    'Bmaj9': [
        { position: 'x24142', description: 'B major 9' },
        { position: '7 9 9 8 7 7', description: 'Barre B major 9' }
    ],
    'Bm9': [
        { position: 'x20202', description: 'B minor 9' },
        { position: '7 9 7 7 7 7', description: 'Barre B minor 9' }
    ],
    'B9': [
        { position: 'x21202', description: 'B dominant 9' },
        { position: '7 9 7 8 7 7', description: 'Barre B dominant 9' }
    ],
    'Bmaj13': [
        { position: 'x24142', description: 'B major 13' },
        { position: '7 9 9 8 7 7', description: 'Barre B major 13' }
    ],
    'Bm11': [
        { position: 'x20202', description: 'B minor 11' },
        { position: '7 9 7 7 7 7', description: 'Barre B minor 11' }
    ],
    'B13': [
        { position: 'x21202', description: 'B dominant 13' },
        { position: '7 9 7 8 7 7', description: 'Barre B dominant 13' }
    ],
    'B13b9': [
        { position: 'x21202', description: 'B dominant 13b9' },
        { position: '7 9 7 8 7 7', description: 'Barre B dominant 13b9' }
    ]
}; 