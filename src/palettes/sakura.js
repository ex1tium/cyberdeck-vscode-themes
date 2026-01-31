/**
 * Cyberdeck Sakura - Cherry Blossom Palette
 * Japanese cyberpunk with cherry pink accents
 */
module.exports = {
  name: "Cyberdeck Sakura",
  type: "dark", // vs-dark

  // ==========================================================================
  // BACKGROUND COLORS
  // ==========================================================================
  bg: {
    base: "#1a1418",        // Dark charcoal with warm tint
    darker: "#120e12",      // Deep charcoal
    elevated: "#2a2228",    // Warm gray
    highlight: "#3d2838",   // Subtle pink-gray
    selection: "#4a3545",   // Muted mauve
    hover: "#2e2028",       // Warm hover
    inactive: "#161214",    // Dark warm charcoal
    debug: "#5a3050",       // Muted magenta debug
  },

  // ==========================================================================
  // FOREGROUND / TEXT COLORS
  // ==========================================================================
  fg: {
    base: "#f0e6eb",        // Soft pink-white
    muted: "#d0c0c8",       // Dusty rose-gray
    dimmed: "#786070",      // Muted mauve
    bright: "#fff5f8",      // Bright pink-white
    soft: "#f0d0e0",        // Soft pink for hints
    inactive: "#5a4850",    // Dark mauve
  },

  // ==========================================================================
  // ACCENT COLORS
  // ==========================================================================
  accent: {
    primary: "#ff6b9d",     // Vibrant cherry pink
    secondary: "#c45c8a",   // Deeper rose
    pink: "#ffb7c5",        // Soft sakura
    hotPink: "#ff4777",     // Hot cherry
    magenta: "#e05090",     // Cherry magenta
  },

  // ==========================================================================
  // SYNTAX HIGHLIGHTING
  // ==========================================================================
  syntax: {
    function: "#7dcea0",    // Soft jade green (contrast)
    type: "#89c4e8",        // Soft sky blue
    string: "#ffd3b6",      // Soft peach
    builtin: "#a8d8d8",     // Soft teal
    keyword: "#ff6b9d",     // Cherry pink
    storage: "#f09080",     // Soft coral
    namespace: "#a8d8ea",   // Pale blue
    attribute: "#b8e0e0",   // Pale cyan
    comment: "#685860",     // Muted brown-gray
    punctuation: "#d0c0c8", // Dusty rose-gray
    property: "#e8d0c0",    // Soft cream
    constant: "#ffb7c5",    // Sakura pink
    number: "#d090b0",      // Dusty rose
    escape: "#89c4e8",      // Soft sky blue
    invalid: "#705060",     // Dark mauve
    error: "#c04060",       // Deep rose
  },

  // ==========================================================================
  // UI STATE COLORS
  // ==========================================================================
  state: {
    error: "#c04060",       // Deep rose
    errorBg: "#502030",     // Dark rose background
    warning: "#e8c060",     // Soft gold
    info: "#ff6b9d",        // Cherry pink
    hint: "#7dcea0",        // Soft jade
    success: "#7dcea0",     // Soft jade
    added: "#2a5040",       // Dark jade
    deleted: "#502030",     // Dark rose
    modified: "#e8c060",    // Soft gold
  },

  // ==========================================================================
  // TERMINAL ANSI COLORS
  // ==========================================================================
  terminal: {
    black: "#120e12",
    red: "#ff4777",
    green: "#7dcea0",
    yellow: "#ffd3b6",
    blue: "#89c4e8",
    magenta: "#ff6b9d",
    cyan: "#a8d8ea",
    white: "#786070",
    brightBlack: "#5a4850",
    brightRed: "#ff6b9d",
    brightGreen: "#a8e6c0",
    brightYellow: "#ffe0c8",
    brightBlue: "#a8d8f0",
    brightMagenta: "#ffb7c5",
    brightCyan: "#c0e8f0",
    brightWhite: "#fff5f8",
  },

  // ==========================================================================
  // SPECIAL COLORS
  // ==========================================================================
  special: {
    cursor: "#ff6b9d",
    link: "#c45c8a",
    linkActive: "#ff6b9d",
    console: "#ffd3b6",
    debugToken: "#d090b0",
    errorToken: "#c04060",
    infoToken: "#89c4e8",
    warnToken: "#e8c060",
  },
};
