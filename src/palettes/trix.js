/**
 * Cyberdeck Trix - Digital Neon Green Palette
 * Hacker aesthetic with green base and vibrant accents
 */
module.exports = {
  name: "Cyberdeck Trix",
  type: "dark", // vs-dark

  // ==========================================================================
  // BACKGROUND COLORS
  // ==========================================================================
  bg: {
    base: "#0a0c0a",        // Near true black with green tint
    darker: "#050605",      // True black for sidebars
    elevated: "#101810",    // Subtle green tint
    highlight: "#0d2818",   // Dark green highlight
    selection: "#1a3d1a",   // Green selection
    hover: "#0a1f0a",       // Subtle green hover
    inactive: "#080a08",    // Near black unfocused
    debug: "#0d5c0d",       // Dark green debug toolbar
  },

  // ==========================================================================
  // FOREGROUND / TEXT COLORS
  // ==========================================================================
  fg: {
    base: "#c8f0c8",        // Light green-white
    muted: "#a0d0a0",       // Muted green (brighter)
    dimmed: "#608860",      // Line numbers (more readable)
    bright: "#e0ffe0",      // Bright green-white
    soft: "#b0e8b0",        // Light green for hints
    inactive: "#507850",    // Inactive text (brighter)
  },

  // ==========================================================================
  // ACCENT COLORS
  // ==========================================================================
  accent: {
    primary: "#00ff41",     // Classic Matrix green
    secondary: "#20e020",   // Bright green
    pink: "#c0ff00",        // Lime (green family)
    hotPink: "#00ff41",     // Matrix green for status
    magenta: "#00ffaa",     // Cyan-green
  },

  // ==========================================================================
  // SYNTAX HIGHLIGHTING
  // ==========================================================================
  syntax: {
    function: "#00ff41",    // Bright Matrix green
    type: "#00e0a0",        // Teal-green (green adjacent)
    string: "#e0ff00",      // Yellow-lime (phosphor)
    builtin: "#80ff80",     // Soft bright green
    keyword: "#d0ffd8",     // Pale mint-white (softer)
    storage: "#c0ff00",     // Lime-chartreuse
    namespace: "#00d090",   // Sea green
    attribute: "#a0ffa0",   // Soft green
    comment: "#508850",     // Muted green (brighter)
    punctuation: "#90c890", // Muted green (brighter)
    property: "#b0ffb0",    // Pale green
    constant: "#d0ff60",    // Yellow-green
    number: "#80ff00",      // Bright lime
    escape: "#00e0a0",      // Teal-green
    invalid: "#556b2f",     // Dark olive green
    error: "#ff3333",       // Red (needs to stand out)
  },

  // ==========================================================================
  // UI STATE COLORS
  // ==========================================================================
  state: {
    error: "#ff3333",       // Red (needs contrast)
    errorBg: "#3a0000",     // Dark red background
    warning: "#ffff00",     // Bright yellow
    info: "#00ff41",        // Matrix green info
    hint: "#00ffcc",        // Cyan hint
    success: "#00ff41",     // Matrix green success
    added: "#0d5c0d",       // Dark green
    deleted: "#5c0d0d",     // Dark red
    modified: "#ffff00",    // Yellow
  },

  // ==========================================================================
  // TERMINAL ANSI COLORS
  // ==========================================================================
  terminal: {
    black: "#050605",
    red: "#ff3333",
    green: "#00ff41",
    yellow: "#e0ff00",
    blue: "#00e0a0",
    magenta: "#c0ff00",
    cyan: "#00d090",
    white: "#a0d0a0",       // Brighter for readability
    brightBlack: "#507850", // Brighter
    brightRed: "#ff6666",
    brightGreen: "#66ff66",
    brightYellow: "#f0ff66",
    brightBlue: "#66ffc0",
    brightMagenta: "#d0ff66",
    brightCyan: "#66ffaa",
    brightWhite: "#e0ffe0",
  },

  // ==========================================================================
  // SPECIAL COLORS
  // ==========================================================================
  special: {
    cursor: "#00ff41",
    link: "#00e0a0",
    linkActive: "#00ff41",
    console: "#e0ff00",
    debugToken: "#80ff00",
    errorToken: "#ff3333",
    infoToken: "#00ff41",
    warnToken: "#e0ff00",
  },
};
