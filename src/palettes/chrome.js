/**
 * Cyberdeck Chrome - Desaturated with Neon Pops
 * Corporate dystopia - steel base with vibrant accent highlights
 */
module.exports = {
  name: "Cyberdeck Chrome",
  type: "dark", // vs-dark

  // ==========================================================================
  // BACKGROUND COLORS
  // ==========================================================================
  bg: {
    base: "#12141a",        // Cold dark blue-gray
    darker: "#0c0d10",      // Near black
    elevated: "#1e2028",    // Steel gray
    highlight: "#2a2d38",   // Cold highlight
    selection: "#363a48",   // Steel selection
    hover: "#22252e",       // Cold hover
    inactive: "#101218",    // Dark steel unfocused
    debug: "#3a4050",       // Steel debug toolbar
  },

  // ==========================================================================
  // FOREGROUND / TEXT COLORS
  // ==========================================================================
  fg: {
    base: "#d8dce8",        // Cool silver-white
    muted: "#a0a8b8",       // Muted silver
    dimmed: "#5a6070",      // Steel gray
    bright: "#f0f4ff",      // Bright silver
    soft: "#b8c0d0",        // Soft silver for hints
    inactive: "#4a5060",    // Dark steel
  },

  // ==========================================================================
  // ACCENT COLORS
  // ==========================================================================
  accent: {
    primary: "#00d4ff",     // Bright cyan (more vibrant)
    secondary: "#7b68ee",   // Medium slate blue
    pink: "#ff6b9d",        // Soft neon pink
    hotPink: "#00d4ff",     // Cyan for status
    magenta: "#c678dd",     // Soft purple
  },

  // ==========================================================================
  // SYNTAX HIGHLIGHTING
  // ==========================================================================
  syntax: {
    function: "#50fa7b",    // Bright green (pop!)
    type: "#00d4ff",        // Bright cyan
    string: "#f1fa8c",      // Bright yellow
    builtin: "#8be9fd",     // Soft cyan
    keyword: "#ff79c6",     // Bright pink
    storage: "#ffb86c",     // Soft orange
    namespace: "#bd93f9",   // Soft purple
    attribute: "#8be9fd",   // Soft cyan
    comment: "#5a6070",     // Steel gray
    punctuation: "#a0a8b8", // Muted silver
    property: "#e0e0e0",    // Light silver
    constant: "#ff6b9d",    // Soft pink
    number: "#bd93f9",      // Soft purple
    escape: "#00d4ff",      // Bright cyan
    invalid: "#686878",     // Dark gray
    error: "#ff5555",       // Red
  },

  // ==========================================================================
  // UI STATE COLORS
  // ==========================================================================
  state: {
    error: "#ff5555",       // Red
    errorBg: "#402830",     // Dark muted red
    warning: "#f1fa8c",     // Bright yellow
    info: "#00d4ff",        // Bright cyan
    hint: "#50fa7b",        // Bright green
    success: "#50fa7b",     // Bright green
    added: "#2a4a3a",       // Dark teal
    deleted: "#4a2a30",     // Dark muted red
    modified: "#f1fa8c",    // Bright yellow
  },

  // ==========================================================================
  // TERMINAL ANSI COLORS
  // ==========================================================================
  terminal: {
    black: "#0c0d10",
    red: "#ff5555",
    green: "#50fa7b",
    yellow: "#f1fa8c",
    blue: "#00d4ff",
    magenta: "#ff79c6",
    cyan: "#8be9fd",
    white: "#5a6070",
    brightBlack: "#4a5060",
    brightRed: "#ff6e6e",
    brightGreen: "#69ff94",
    brightYellow: "#ffffa5",
    brightBlue: "#40e0ff",
    brightMagenta: "#ff92df",
    brightCyan: "#a4ffff",
    brightWhite: "#f0f4ff",
  },

  // ==========================================================================
  // SPECIAL COLORS
  // ==========================================================================
  special: {
    cursor: "#00d4ff",
    link: "#8be9fd",
    linkActive: "#00d4ff",
    console: "#f1fa8c",
    debugToken: "#bd93f9",
    errorToken: "#ff5555",
    infoToken: "#00d4ff",
    warnToken: "#ffb86c",
  },
};
