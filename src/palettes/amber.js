/**
 * Cyberdeck Monochrome Amber - OLED Monochrome Terminal
 * IBM 5155/Zenith amber CRT aesthetic on true black
 */
module.exports = {
  name: "Cyberdeck Monochrome Amber",
  type: "dark", // vs-dark

  // ==========================================================================
  // BACKGROUND COLORS
  // ==========================================================================
  bg: {
    base: "#000000",        // True OLED black
    darker: "#000000",      // Pure black for sidebars
    elevated: "#0a0700",    // Barely perceptible amber tint
    highlight: "#1a1000",   // Dark amber highlight
    selection: "#2a1800",   // Amber selection
    hover: "#0f0a00",       // Subtle amber hover
    inactive: "#000000",    // Pure black unfocused
    debug: "#1a1200",       // Dark amber debug toolbar
  },

  // ==========================================================================
  // FOREGROUND / TEXT COLORS
  // ==========================================================================
  fg: {
    base: "#ffb000",        // Classic amber - primary text
    muted: "#cc8c00",       // Muted amber for sidebar
    dimmed: "#806000",      // Dim amber for line numbers
    bright: "#ffc800",      // Bright amber
    soft: "#e0a000",        // Soft amber for hints
    inactive: "#605000",    // Dark amber inactive
  },

  // ==========================================================================
  // ACCENT COLORS
  // ==========================================================================
  accent: {
    primary: "#ffb000",     // Classic amber
    secondary: "#ffc000",   // Bright amber
    pink: "#ff9000",        // Orange-amber (warm)
    hotPink: "#ffd000",     // Bright amber for status
    magenta: "#ffaa00",     // Warm amber
  },

  // ==========================================================================
  // SYNTAX HIGHLIGHTING
  // Monochromatic amber - using intensity/saturation for differentiation
  // ==========================================================================
  syntax: {
    function: "#ffd000",    // Bright amber - functions stand out
    type: "#ffb000",        // Standard amber - types
    string: "#ff9000",      // Orange-amber - strings distinct
    builtin: "#ffc800",     // Bright amber - builtins
    keyword: "#ffe0a0",     // Pale amber - keywords prominent
    storage: "#ffaa00",     // Warm amber
    namespace: "#e0a000",   // Muted amber
    attribute: "#ffcc00",   // Golden amber
    comment: "#705000",     // Dark muted - comments recede
    punctuation: "#a08000", // Muted amber
    property: "#ffc000",    // Bright amber
    constant: "#ffd800",    // Very bright - constants pop
    number: "#ffcc00",      // Golden amber
    escape: "#ff8800",      // Orange - escapes visible
    invalid: "#604000",     // Very dark amber
    error: "#ff4400",       // Orange-red for errors (needs visibility)
  },

  // ==========================================================================
  // UI STATE COLORS
  // ==========================================================================
  state: {
    error: "#ff4400",       // Orange-red (stays in warm family)
    errorBg: "#1a0800",     // Dark warm background
    warning: "#ffd000",     // Bright amber
    info: "#ffb000",        // Standard amber
    hint: "#cc8c00",        // Muted amber
    success: "#ffd000",     // Bright amber
    added: "#1a1200",       // Dark amber
    deleted: "#1a0800",     // Dark orange-red
    modified: "#ffc000",    // Amber
  },

  // ==========================================================================
  // TERMINAL ANSI COLORS
  // Amber monochrome - maps all colors to amber spectrum
  // ==========================================================================
  terminal: {
    black: "#000000",
    red: "#ff4400",         // Orange-red for visibility
    green: "#ffd000",       // Bright amber as "green"
    yellow: "#ffe800",      // Very bright amber
    blue: "#cc8800",        // Muted amber as "blue"
    magenta: "#ff9000",     // Orange-amber
    cyan: "#ffcc00",        // Golden amber
    white: "#ffb000",       // Standard amber
    brightBlack: "#605000",
    brightRed: "#ff6633",
    brightGreen: "#ffe040",
    brightYellow: "#fff080",
    brightBlue: "#e0a000",
    brightMagenta: "#ffaa40",
    brightCyan: "#ffe060",
    brightWhite: "#ffd040",
  },

  // ==========================================================================
  // SPECIAL COLORS
  // ==========================================================================
  special: {
    cursor: "#ffb000",      // Classic amber cursor
    link: "#ffc800",        // Bright amber links
    linkActive: "#ffd800",  // Very bright on hover
    console: "#ff9000",     // Orange-amber console
    debugToken: "#ffcc00",
    errorToken: "#ff4400",
    infoToken: "#ffb000",
    warnToken: "#ffd000",
  },
};
