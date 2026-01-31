/**
 * Cyberdeck 2025 - Original Palette
 * Retro-futuristic neon cyberpunk colors
 */
module.exports = {
  name: "Cyberdeck 2025",
  type: "dark", // vs-dark

  // ==========================================================================
  // BACKGROUND COLORS
  // ==========================================================================
  bg: {
    base: "#130d1a",        // Main editor/UI background
    darker: "#100c0f",      // Sidebar, terminal, inputs
    elevated: "#2a2139",    // Borders, widget shadows
    highlight: "#34294f",   // Selections, find matches
    selection: "#463465",   // Editor selection
    hover: "#3c1c4e",       // List hover states
    inactive: "#180627",    // Unfocused tab background
    debug: "#5a19a5",       // Debug toolbar
  },

  // ==========================================================================
  // FOREGROUND / TEXT COLORS
  // ==========================================================================
  fg: {
    base: "#ded2cd",        // Main editor text
    muted: "#d4cdde",       // Punctuation, secondary text
    dimmed: "#495495",      // Line numbers, descriptions
    bright: "#ffffff",      // High contrast text
    soft: "#f6c4ff",        // Suggest widget, hints
    inactive: "#794796",    // Inactive tab text
  },

  // ==========================================================================
  // ACCENT COLORS
  // ==========================================================================
  accent: {
    primary: "#b141f1",     // Primary purple accent
    secondary: "#a313f7",   // Sidebar titles
    pink: "#ff2289",        // Constants, active elements
    hotPink: "#f92aad",     // Status bar, panel borders
    magenta: "#ff019a",     // Keywords, operators
  },

  // ==========================================================================
  // SYNTAX HIGHLIGHTING
  // ==========================================================================
  syntax: {
    function: "#00ff88",    // Functions, methods
    type: "#58c7e0",        // Types, classes, variables
    string: "#f9c80e",      // Strings, quotes
    builtin: "#d6fc00",     // Built-in types, primitives
    keyword: "#ff019a",     // Keywords (same as accent.magenta)
    storage: "#ff6c11",     // Storage types, tags, macros
    namespace: "#00d0ff",   // Namespaces, modules
    attribute: "#82aaff",   // Attributes, decorators
    comment: "#6071cc",     // Comments
    punctuation: "#d4cdde", // Punctuation, brackets
    property: "#ecd99b",    // Object properties
    constant: "#ff2289",    // Constants (same as accent.pink)
    number: "#b141f1",      // Numeric literals
    escape: "#58c7e0",      // Escape sequences (same as type)
    invalid: "#b16a4e",     // Invalid/deprecated code
    error: "#9c0041",       // Unresolved references
  },

  // ==========================================================================
  // UI STATE COLORS
  // ==========================================================================
  state: {
    error: "#b141f1",       // Error foreground (purple in this theme)
    errorBg: "#9c0041",     // Error backgrounds
    warning: "#ffcc00",     // Warning highlights
    info: "#b141f1",        // Info messages
    hint: "#54e484",        // Hint highlights
    success: "#54e484",     // Success states
    added: "#206d4b",       // Git added
    deleted: "#fa2e46",     // Git deleted
    modified: "#ffcc00",    // Git modified
  },

  // ==========================================================================
  // TERMINAL ANSI COLORS
  // ==========================================================================
  terminal: {
    black: "#100c0f",
    red: "#f92aad",
    green: "#54e484",
    yellow: "#ffcc00",
    blue: "#58c7e0",
    magenta: "#b141f1",
    cyan: "#61e2ff",
    white: "#495495",
    brightBlack: "#017b8b",
    brightRed: "#f92aad",
    brightGreen: "#54e484",
    brightYellow: "#ffcc00",
    brightBlue: "#61e2ff",
    brightMagenta: "#b141f1",
    brightCyan: "#61e2ff",
    brightWhite: "#ffffff",
  },

  // ==========================================================================
  // SPECIAL COLORS
  // ==========================================================================
  special: {
    cursor: "#58c7e0",
    link: "#649fc4",
    linkActive: "#b141f1",
    console: "#ffee00",
    debugToken: "#b267e6",
    errorToken: "#f44747",
    infoToken: "#6796e6",
    warnToken: "#cd9731",
  },
};
