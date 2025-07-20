# The Seventh Bar 𝄪𝄫

> Jazz up your chords one voicing at a time.

A modern, interactive web application that transforms basic guitar chords into sophisticated jazz voicings with beautiful fretboard diagrams and educational tips.

![The Seventh Bar](https://img.shields.io/badge/Status-Live-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![CSS](https://img.shields.io/badge/CSS-Glassmorphism-purple)
![Cursor](https://img.shields.io/badge/Built%20With-Cursor%20AI-orange)

## 🎸 Motivation

As a guitarist learning jazz, I often found myself wondering: *"How do I play a jazz version of this chord?"* Traditional chord charts and theory books were overwhelming, and I wanted a simple way to see jazz voicings for any chord I was working with.

**The Seventh Bar** was born from this need - a tool that instantly shows you beautiful jazz voicings with clear fretboard diagrams, so you can focus on playing rather than deciphering complex music theory.

## ✨ Features

### 🎯 **Core Functionality**
- **Instant Chord Conversion**: Transform basic chords (C, Am, F, G) into jazz voicings
- **Multiple Complexity Levels**: Basic, Intermediate, and Advanced jazz extensions
- **Voicing Styles**: Drop 2, Drop 3, Close Voicing, and Shell Voicing
- **Interactive Fretboard Diagrams**: Visual finger placement for every chord
- **Educational Tips**: Learn about each chord's characteristics and usage

### 🎨 **Design & UX**
- **Modern Glassmorphism UI**: Beautiful, responsive design
- **Real-time Conversion**: Press Ctrl+Enter for instant results
- **Mobile Responsive**: Works perfectly on all devices
- **Keyboard Shortcuts**: Quick conversion with Ctrl+Enter
- **Professional Typography**: Clean, readable interface

### 🎵 **Musical Features**
- **Comprehensive Chord Support**: Major, minor, dominant, diminished, augmented
- **Accidentals**: Full support for sharps (#) and flats (b)
- **Extended Harmonies**: 7ths, 9ths, 13ths, and more
- **Multiple Positions**: Various fingerings for each chord
- **Jazz Theory Integration**: Educational content for learning

## 🚀 Quick Start

### **Live Demo**
Visit: [The Seventh Bar](https://karushp.github.io/the-seventh-bar)

### **Local Development**
```bash
# Clone the repository
git clone https://github.com/yourusername/the-seventh-bar.git
cd the-seventh-bar

# Start local server (required for ES6 modules)
python3 -m http.server 8000
# or
npx serve .

# Open in browser
open http://localhost:8000
```

## 📖 Usage

### **Basic Usage**
1. **Enter Chords**: Type chords like `C Am F G` or single chords like `C`
2. **Select Complexity**: Choose Basic, Intermediate, or Advanced
3. **Pick Voicing**: Select Drop 2, Drop 3, Close, or Shell voicing
4. **Jazz Up!**: Click the button or press `Ctrl + Enter`

### **Supported Input Formats**
```
Single Chords: C, Am, F#m, Bb
Progressions: C Am F G, C# F# Bb
Extended Chords: Cmaj7, Dm7, G7, F#m7b5
Accidentals: C#, F#, Bb, Eb, Ab
```

### **Complexity Levels**
- **Basic**: Simple 7th chords and basic extensions
- **Intermediate**: 9ths, 13ths, and more complex voicings
- **Advanced**: Altered extensions, complex harmonies

### **Voicing Types**
- **Drop 2**: Classic jazz voicing with wide intervals
- **Drop 3**: Rich, full-sounding voicings
- **Close Voicing**: Compact, tight harmonies
- **Shell Voicing**: Essential tones only, great for comping

## 🏗️ Project Structure

```
the-seventh-bar/
├── index.html              # Main HTML file
├── styles.css              # Glassmorphism styling
├── script.js               # Main application logic
├── data/                   # Chord data and configurations
│   ├── chordData.js        # Chord definitions and notes
│   ├── fretboardPositions.js # Fretboard finger positions
│   └── chordTips.js        # Educational tips for chords
├── utils/                  # Utility functions
│   └── chordUtils.js       # Core chord processing logic
├── README.md               # This file
└── package.json            # Project configuration
```

## 🛠️ Technology Stack

- **Frontend**: Vanilla JavaScript (ES6+)
- **Styling**: CSS3 with Glassmorphism effects
- **Architecture**: Modular ES6 modules
- **Deployment**: GitHub Pages
- **Design**: Modern, responsive glassmorphism UI

## 🎯 Key Features Explained

### **Chord Processing Engine**
The app uses a sophisticated chord parsing and conversion system:
- **Smart Parsing**: Automatically detects chord qualities and extensions
- **Jazz Conversion**: Transforms basic chords into jazz voicings
- **Position Selection**: Chooses optimal fingerings based on complexity and voicing

### **Fretboard Visualization**
Interactive diagrams show:
- **Finger Placement**: Clear visual indicators for each finger
- **String Information**: Open, muted, and fretted strings
- **Multiple Positions**: Various ways to play each chord

### **Educational Content**
Each chord comes with:
- **Theory Tips**: Understanding the chord's role in jazz
- **Usage Suggestions**: When and how to use each voicing
- **Practice Ideas**: Tips for incorporating into your playing

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### **Areas for Improvement**
- Additional chord voicings and positions
- Audio playback functionality
- Export features (PDF, MIDI)
- More educational content
- Advanced jazz theory explanations

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Jazz Theory**: Inspired by the rich harmonic language of jazz
- **Glassmorphism Design**: Modern UI trends for beautiful interfaces
- **Open Source Community**: Built with love for fellow musicians
- **Cursor AI**: This project was built using pure vibe coding with Cursor - where creativity meets code! 🚀

## 📞 Contact

- **Project Link**: [https://github.com/karushp/the-seventh-bar](https://github.com/karushp/the-seventh-bar)
- **Live Demo**: [https://karushp.github.io/the-seventh-bar](https://karushp.github.io/the-seventh-bar)

---

**Made with 🎸 by someone who still googles 'jazz chords'**

*Built with pure vibe coding using Cursor AI - where creativity meets code!*

*The Seventh Bar - Where basic chords become jazz magic.* 
