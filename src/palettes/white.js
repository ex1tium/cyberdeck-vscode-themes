/**
 * Cyberdeck Monochrome White - OLED Monochrome Terminal
 * VGA monochrome / paper white CRT aesthetic on true black
 */
module.exports = {
  name: "Cyberdeck Monochrome White",
  type: "dark", // vs-dark

  // ==========================================================================
  // BACKGROUND COLORS
  // ==========================================================================
  bg: {
    base: "#000000",        // True OLED black
    darker: "#000000",      // Pure black for sidebars
    elevated: "#080808",    // Barely perceptible gray tint
    highlight: "#1a1a1a",   // Dark gray highlight
    selection: "#282828",   // Gray selection
    hover: "#101010",       // Subtle gray hover
    inactive: "#000000",    // Pure black unfocused
    debug: "#1a1a1a",       // Dark gray debug toolbar
  },

  // ==========================================================================
  // FOREGROUND / TEXT COLORS
  // ==========================================================================
  fg: {
    base: "#c0c0c0",        // VGA silver - primary text
    muted: "#909090",       // Muted gray for sidebar
    dimmed: "#606060",      // Dim gray for line numbers
    bright: "#e0e0e0",      // Bright white
    soft: "#b0b0b0",        // Soft gray for hints
    inactive: "#505050",    // Dark gray inactive
  },

  // ==========================================================================
  // ACCENT COLORS
  // ==========================================================================
  accent: {
    primary: "#c0c0c0",     // VGA silver
    secondary: "#d0d0d0",   // Bright gray
    pink: "#a0a0a0",        // Muted gray
    hotPink: "#e0e0e0",     // Bright white for status
    magenta: "#b0b0b0",     // Soft gray
  },

  // ==========================================================================
  // SYNTAX HIGHLIGHTING
  // Monochromatic white/gray - using intensity for differentiation
  // ==========================================================================
  syntax: {
    function: "#e0e0e0",    // Bright white - functions stand out
    type: "#c0c0c0",        // Standard silver - types
    string: "#a0a0a0",      // Muted gray - strings distinct
    builtin: "#d0d0d0",     // Bright gray - builtins
    keyword: "#ffffff",     // Pure white - keywords prominent
    storage: "#b8b8b8",     // Soft gray
    namespace: "#909090",   // Muted gray
    attribute: "#d0d0d0",   // Bright gray
    comment: "#585858",     // Dark gray - comments recede
    punctuation: "#707070", // Muted gray
    property: "#d0d0d0",    // Bright gray
    constant: "#f0f0f0",    // Very bright - constants pop
    number: "#d8d8d8",      // Bright gray
    escape: "#888888",      // Medium gray - escapes visible
    invalid: "#404040",     // Very dark gray
    error: "#ff4444",       // Red for errors (needs visibility)
  },

  // ==========================================================================
  // UI STATE COLORS
  // ==========================================================================
  state: {
    error: "#ff4444",       // Red (needs contrast)
    errorBg: "#1a0000",     // Dark red background
    warning: "#e0e0e0",     // Bright white
    info: "#c0c0c0",        // Standard silver
    hint: "#909090",        // Muted gray
    success: "#e0e0e0",     // Bright white
    added: "#101810",       // Very dark green tint
    deleted: "#1a0808",     // Very dark red tint
    modified: "#d0d0d0",    // Bright gray
  },

  // ==========================================================================
  // TERMINAL ANSI COLORS
  // White/gray monochrome - maps all colors to grayscale
  // ==========================================================================
  terminal: {
    black: "#000000",
    red: "#ff4444",         // Keep red for visibility
    green: "#e0e0e0",       // Bright white as "green"
    yellow: "#f0f0f0",      // Very bright white
    blue: "#909090",        // Muted gray as "blue"
    magenta: "#a0a0a0",     // Muted gray
    cyan: "#d0d0d0",        // Bright gray
    white: "#c0c0c0",       // Standard VGA silver
    brightBlack: "#505050",
    brightRed: "#ff6666",
    brightGreen: "#f0f0f0",
    brightYellow: "#ffffff",
    brightBlue: "#b0b0b0",
    brightMagenta: "#c0c0c0",
    brightCyan: "#e0e0e0",
    brightWhite: "#ffffff",
  },

  // ==========================================================================
  // SPECIAL COLORS
  // ==========================================================================
  special: {
    cursor: "#c0c0c0",      // VGA silver cursor
    link: "#d0d0d0",        // Bright gray links
    linkActive: "#f0f0f0",  // Very bright on hover
    console: "#a0a0a0",     // Muted gray console
    debugToken: "#d0d0d0",
    errorToken: "#ff4444",
    infoToken: "#c0c0c0",
    warnToken: "#e0e0e0",
  },
};
