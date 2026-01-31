/**
 * Cyberdeck Vapor - Vaporwave Palette
 * Lo-fi aesthetic with soft pastels on dark slate
 */
module.exports = {
  name: "Cyberdeck Vapor",
  type: "dark", // vs-dark

  // ==========================================================================
  // BACKGROUND COLORS
  // ==========================================================================
  bg: {
    base: "#1a1a2e",        // Dark blue-purple slate
    darker: "#141428",      // Deeper for sidebars
    elevated: "#252545",    // Muted purple-gray
    highlight: "#2d2d5a",   // Soft purple highlight
    selection: "#3d3d6b",   // Muted selection
    hover: "#2a2a4a",       // Subtle hover
    inactive: "#18182a",    // Dark slate unfocused
    debug: "#4a3a6a",       // Muted purple debug
  },

  // ==========================================================================
  // FOREGROUND / TEXT COLORS
  // ==========================================================================
  fg: {
    base: "#e0d6eb",        // Soft lavender white
    muted: "#b8a9c9",       // Muted lavender
    dimmed: "#6b5b7a",      // Dusty purple
    bright: "#f5f0ff",      // Bright lavender-white
    soft: "#d4c4e8",        // Soft violet for hints
    inactive: "#5a4a6a",    // Muted purple-gray
  },

  // ==========================================================================
  // ACCENT COLORS
  // ==========================================================================
  accent: {
    primary: "#c9a0dc",     // Soft lavender
    secondary: "#7ec8e3",   // Soft cyan
    pink: "#f4a5c2",        // Soft pink
    hotPink: "#e8a0bf",     // Muted rose
    magenta: "#dda0dd",     // Plum
  },

  // ==========================================================================
  // SYNTAX HIGHLIGHTING
  // ==========================================================================
  syntax: {
    function: "#87e5c4",    // Soft mint green
    type: "#7ec8e3",        // Soft sky blue
    string: "#f9e784",      // Soft butter yellow
    builtin: "#a8e6cf",     // Soft seafoam
    keyword: "#f4a5c2",     // Soft pink
    storage: "#f0b27a",     // Soft peach
    namespace: "#a8d8ea",   // Pale cyan
    attribute: "#a8e6cf",   // Soft seafoam
    comment: "#6b5b7a",     // Dusty purple
    punctuation: "#b8a9c9", // Muted lavender
    property: "#d4c4a8",    // Soft tan
    constant: "#e8a0bf",    // Muted rose
    number: "#c9a0dc",      // Soft lavender
    escape: "#7ec8e3",      // Soft cyan
    invalid: "#8b7088",     // Dusty mauve
    error: "#d4667a",       // Muted coral
  },

  // ==========================================================================
  // UI STATE COLORS
  // ==========================================================================
  state: {
    error: "#d4667a",       // Muted coral
    errorBg: "#5a2a3a",     // Dark rose background
    warning: "#f9e784",     // Butter yellow
    info: "#c9a0dc",        // Soft lavender
    hint: "#87e5c4",        // Soft mint
    success: "#87e5c4",     // Soft mint
    added: "#2a5a4a",       // Muted teal
    deleted: "#5a2a3a",     // Muted rose
    modified: "#f9e784",    // Butter yellow
  },

  // ==========================================================================
  // TERMINAL ANSI COLORS
  // ==========================================================================
  terminal: {
    black: "#141428",
    red: "#e8a0bf",
    green: "#87e5c4",
    yellow: "#f9e784",
    blue: "#7ec8e3",
    magenta: "#c9a0dc",
    cyan: "#a8d8ea",
    white: "#6b5b7a",
    brightBlack: "#5a4a6a",
    brightRed: "#f4a5c2",
    brightGreen: "#a8e6cf",
    brightYellow: "#fff0a5",
    brightBlue: "#a8d8ea",
    brightMagenta: "#dda0dd",
    brightCyan: "#b8e8e8",
    brightWhite: "#f5f0ff",
  },

  // ==========================================================================
  // SPECIAL COLORS
  // ==========================================================================
  special: {
    cursor: "#7ec8e3",
    link: "#a8d8ea",
    linkActive: "#c9a0dc",
    console: "#f9e784",
    debugToken: "#c9a0dc",
    errorToken: "#d4667a",
    infoToken: "#7ec8e3",
    warnToken: "#f0b27a",
  },
};
