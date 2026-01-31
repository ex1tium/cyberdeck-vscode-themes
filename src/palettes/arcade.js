/**
 * Cyberdeck Arcade - 80s Arcade Cabinet Aesthetic
 * Bold neon on deep purple-black, CRT glow vibes
 */
module.exports = {
  name: "Cyberdeck Arcade",
  type: "dark", // vs-dark

  // ==========================================================================
  // BACKGROUND COLORS - Deep purple-black CRT darkness
  // ==========================================================================
  bg: {
    base: "#0d0a18",        // Deep purple-black
    darker: "#080610",      // Near black for sidebars
    elevated: "#18102a",    // Dark indigo panels
    highlight: "#2a1840",   // Subtle purple glow
    selection: "#3a1850",   // Magenta-tinted selection
    hover: "#201530",       // Purple hover
    inactive: "#0a0810",    // Very dark purple unfocused
    debug: "#2a1848",       // Purple debug toolbar
  },

  // ==========================================================================
  // FOREGROUND / TEXT COLORS - CRT phosphor warmth
  // ==========================================================================
  fg: {
    base: "#f0e8ff",        // Warm purple-white
    muted: "#a080c0",       // Purple-tinted sidebar text
    dimmed: "#6050a0",      // Muted purple (line numbers)
    bright: "#ffffff",      // Pure white
    soft: "#c8b0e0",        // Soft purple for hints
    inactive: "#504080",    // Dark purple
  },

  // ==========================================================================
  // ACCENT COLORS - Bold arcade neon
  // ==========================================================================
  accent: {
    primary: "#ff40ff",     // Hot magenta
    secondary: "#ffff00",   // Bright yellow
    pink: "#ff40ff",        // Hot magenta
    hotPink: "#00ffff",     // Cyan for status bar
    magenta: "#c020c0",     // Deep magenta
  },

  // ==========================================================================
  // SYNTAX HIGHLIGHTING - Pure arcade neon
  // ==========================================================================
  syntax: {
    function: "#00ffff",    // Electric cyan (the arcade pop!)
    type: "#b060ff",        // Vibrant purple
    string: "#ffff00",      // Bright yellow (high score!)
    builtin: "#40e0ff",     // Soft cyan
    keyword: "#ff40ff",     // Hot magenta
    storage: "#ff80c0",     // Pink
    namespace: "#a060e0",   // Medium purple
    attribute: "#40e0ff",   // Soft cyan
    comment: "#6050a0",     // Muted purple
    punctuation: "#a090c0", // Light purple-gray
    property: "#60d0d0",    // Soft teal (distinct from purple types)
    constant: "#ff20a0",    // Deep pink
    number: "#ff8040",      // Orange (score display)
    escape: "#40ffc0",      // Mint green
    invalid: "#402050",     // Dark purple
    error: "#ff4040",       // Red
  },

  // ==========================================================================
  // UI STATE COLORS
  // ==========================================================================
  state: {
    error: "#ff4040",       // Red
    errorBg: "#401828",     // Dark red-purple
    warning: "#ffff00",     // Bright yellow
    info: "#00ffff",        // Cyan
    hint: "#40e0ff",        // Soft cyan
    success: "#40ff80",     // Bright green
    added: "#183828",       // Dark green
    deleted: "#381828",     // Dark red
    modified: "#ffff00",    // Bright yellow
  },

  // ==========================================================================
  // TERMINAL ANSI COLORS - Arcade cabinet palette
  // ==========================================================================
  terminal: {
    black: "#080610",
    red: "#ff4040",
    green: "#40ff80",
    yellow: "#ffff00",
    blue: "#4080ff",
    magenta: "#ff40ff",
    cyan: "#00ffff",
    white: "#6050a0",
    brightBlack: "#504080",
    brightRed: "#ff6060",
    brightGreen: "#60ffa0",
    brightYellow: "#ffff60",
    brightBlue: "#60a0ff",
    brightMagenta: "#ff80ff",
    brightCyan: "#60ffff",
    brightWhite: "#ffffff",
  },

  // ==========================================================================
  // SPECIAL COLORS
  // ==========================================================================
  special: {
    cursor: "#00ffff",      // Cyan cursor
    link: "#40e0ff",        // Soft cyan
    linkActive: "#ff40ff",  // Hot magenta
    console: "#ffff00",     // Bright yellow
    debugToken: "#b060ff",
    errorToken: "#ff4040",
    infoToken: "#00ffff",
    warnToken: "#ff8040",
  },
};
