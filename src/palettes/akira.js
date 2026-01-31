/**
 * Cyberdeck Akira - Neo-Tokyo 2019 Palette
 * Street gang chaos, psychic destruction, neon-noir cyberpunk
 *
 * Color research sources:
 * - Akira Red: #e12120 (official), #ec240c (poster)
 * - Neo-Tokyo night: #2f1583 (deep purple-blue)
 * - 327 colors total, 50 invented for the film's night scenes
 * - Neon-noir: bright neon against deep inky blacks
 */
module.exports = {
  name: "Cyberdeck Akira",
  type: "dark", // vs-dark

  // ==========================================================================
  // BACKGROUND COLORS - Neo-Tokyo night sky (cool blue-black, not warm)
  // ==========================================================================
  bg: {
    base: "#0a0812",        // Deep blue-black (Neo-Tokyo night)
    darker: "#06040c",      // Near true black with blue tint
    elevated: "#141020",    // Slightly lifted purple-black
    highlight: "#1c1630",   // Selection highlight
    selection: "#2a2040",   // Active selection (purple tint)
    hover: "#181428",       // Hover state
    inactive: "#080610",    // Unfocused
    debug: "#1a1428",       // Debug toolbar
  },

  // ==========================================================================
  // FOREGROUND / TEXT COLORS - Cool white with slight blue tint
  // ==========================================================================
  fg: {
    base: "#e8e4f0",        // Cool white (slightly blue)
    muted: "#a0a0b8",       // Muted blue-gray
    dimmed: "#605878",      // Line numbers (purple-gray)
    bright: "#ffffff",      // Pure white (headlights, capsules)
    soft: "#c8c4d8",        // Soft lavender-white
    inactive: "#504868",    // Inactive text
  },

  // ==========================================================================
  // ACCENT COLORS - Akira red, pure neon, psychic green
  // ==========================================================================
  accent: {
    primary: "#e12120",     // Akira Red (Kaneda's jacket/bike)
    secondary: "#00ffff",   // Pure neon cyan (city signs)
    tertiary: "#00ff80",    // Neon green (psychic energy)
    purple: "#a080ff",      // Bright purple (visible)
    salmon: "#ec9f87",      // Salmon pink (warm accent)
  },

  // ==========================================================================
  // SYNTAX HIGHLIGHTING - Full neon pop (high contrast against blue-black)
  // ==========================================================================
  syntax: {
    keyword: "#e12120",     // Akira Red - keywords (dominant)
    function: "#ffffff",    // Pure white - functions (headlights)
    type: "#00ffff",        // Pure neon cyan - types/classes
    string: "#ec9f87",      // Salmon pink - strings
    builtin: "#c0ffff",     // Pale neon cyan - built-ins
    storage: "#ff4040",     // Bright red - storage modifiers
    namespace: "#a080ff",   // Bright purple - namespaces (visible)
    attribute: "#ff6040",   // Bright red-orange - decorators
    comment: "#6a6090",     // Brighter purple-gray - comments
    punctuation: "#9090b0", // Brighter blue-gray - punctuation
    property: "#00ff80",    // Neon green - properties (psychic energy)
    constant: "#ff4040",    // Bright red - constants
    number: "#ff9060",      // Bright coral - numbers
    escape: "#00ffff",      // Pure neon cyan - escapes
    invalid: "#2a2040",     // Dark purple - invalid
    error: "#ff2020",       // Bright red - errors
  },

  // ==========================================================================
  // UI STATE COLORS - Neo-Tokyo alerts (neon pop)
  // ==========================================================================
  state: {
    error: "#ff2020",       // Bright red
    errorBg: "#200808",     // Dark red bg
    warning: "#ff9060",     // Bright coral
    info: "#00c0ff",        // Bright blue
    hint: "#00ffff",        // Pure neon cyan
    success: "#00ff80",     // Neon green (psychic energy)
    added: "#082018",       // Dark green
    deleted: "#200808",     // Dark red
    modified: "#e12120",    // Akira red
  },

  // ==========================================================================
  // TERMINAL ANSI COLORS - Full neon pop
  // ==========================================================================
  terminal: {
    black: "#06040c",       // Deep blue-black
    red: "#e12120",         // Akira red
    green: "#00ff80",       // Neon green (psychic)
    yellow: "#ff9060",      // Bright coral
    blue: "#00c0ff",        // Bright blue
    magenta: "#a080ff",     // Bright purple
    cyan: "#00ffff",        // Pure neon cyan
    white: "#6a6090",       // Brighter purple-gray
    brightBlack: "#605880",
    brightRed: "#ff4040",   // Bright red
    brightGreen: "#40ffa0", // Brighter green
    brightYellow: "#ffc080",// Light coral
    brightBlue: "#40d0ff",  // Brighter blue
    brightMagenta: "#c0a0ff",// Brighter purple
    brightCyan: "#40ffff",  // Brighter cyan
    brightWhite: "#ffffff", // Pure white
  },

  // ==========================================================================
  // SPECIAL COLORS
  // ==========================================================================
  special: {
    cursor: "#e12120",      // Akira red cursor
    link: "#00ffff",        // Neon cyan links
    linkActive: "#ffffff",  // Pure white active
    console: "#e12120",     // Akira red console
    debugToken: "#00ffff",
    errorToken: "#ff2020",
    infoToken: "#00c0ff",
    warnToken: "#ff9060",
  },
};
