/**
 * Cyberdeck 2077 - Cyberpunk 2077 Inspired Palette
 * Iconic yellow and cyan on dark charcoal, inspired by the game's aesthetic
 */
module.exports = {
  name: "Cyberdeck 2077",
  type: "dark", // vs-dark

  // ==========================================================================
  // BACKGROUND COLORS - Dark charcoal
  // ==========================================================================
  bg: {
    base: "#1a1a1e",        // Dark charcoal
    darker: "#121214",      // Near black for sidebars
    elevated: "#2a2a30",    // Slightly lighter panels
    highlight: "#3a3a42",   // Subtle highlight
    selection: "#4a4a55",   // Selection
    hover: "#2e2e36",       // Hover state
    inactive: "#18181c",    // Unfocused
    debug: "#2a3040",       // Debug toolbar
  },

  // ==========================================================================
  // FOREGROUND / TEXT COLORS
  // ==========================================================================
  fg: {
    base: "#e8e8e8",        // Light gray text
    muted: "#a0a0a8",       // Muted gray
    dimmed: "#606068",      // Line numbers
    bright: "#ffffff",      // Pure white
    soft: "#d0d0d8",        // Soft gray for hints
    inactive: "#505058",    // Inactive text
  },

  // ==========================================================================
  // ACCENT COLORS - Yellow, cyan, and hot pink 
  // ==========================================================================
  accent: {
    primary: "#fcee0a",     // 2077 yellow
    secondary: "#00d4d4",   // 2077 cyan
    pink: "#e91e8c",        // Hot pink (sister set Shift keys)
    hotPink: "#00d4d4",     // Cyan for status bar
    magenta: "#e91e8c",     // Hot pink for emphasis
  },

  // ==========================================================================
  // SYNTAX HIGHLIGHTING - Yellow, cyan, hot pink, and purple
  // ==========================================================================
  syntax: {
    function: "#fdf500",    // Cyan (Enter key accent)
    type: "#03D8F3",        // Light cyan (types/classes)
    string: "#ff3e9f",      // Bright gold 
    builtin: "#9370db",     // Cyan (built-in types)
    keyword: "#fcee0a",     // Bright 2077 yellow
    storage: "#e91e8c",     // Hot pink (Shift key magenta)
    namespace: "#9060c0",   // Purple (alpha key violet)
    attribute: "#ff4a8d",   // Light pink (decorator accent)
    comment: "#606068",     // Muted gray
    punctuation: "#a0a0a8", // Gray punctuation
    property: "#5ce5d5",    // Light cyan (object props)
    constant: "#e91e8c",    // Hot pink (distinct from keywords)
    number: "#ffb020",      // Orange (warm accent)
    escape: "#ff4a8d",      // Light pink (stands out in strings)
    invalid: "#3a3a42",     // Dark gray
    error: "#ff2a6d",       // Neon pink/red
  },

  // ==========================================================================
  // UI STATE COLORS
  // ==========================================================================
  state: {
    error: "#ff2a6d",       // Neon pink/red
    errorBg: "#3a1828",     // Dark red background
    warning: "#fcee0a",     // Yellow warning
    info: "#00d4d4",        // Cyan info
    hint: "#5ce5d5",        // Light cyan hint
    success: "#00d4d4",     // Cyan success
    added: "#1a3a2a",       // Dark green
    deleted: "#3a1a28",     // Dark red
    modified: "#fcee0a",    // Yellow modified
  },

  // ==========================================================================
  // TERMINAL ANSI COLORS
  // ==========================================================================
  terminal: {
    black: "#121214",
    red: "#ff2a6d",
    green: "#00d4d4",
    yellow: "#fcee0a",
    blue: "#00a8a8",
    magenta: "#ff2a6d",
    cyan: "#00d4d4",
    white: "#606068",
    brightBlack: "#505058",
    brightRed: "#ff4a8d",
    brightGreen: "#5ce5d5",
    brightYellow: "#ffff4a",
    brightBlue: "#5ce5d5",
    brightMagenta: "#ff4a8d",
    brightCyan: "#5ce5d5",
    brightWhite: "#ffffff",
  },

  // ==========================================================================
  // SPECIAL COLORS
  // ==========================================================================
  special: {
    cursor: "#fcee0a",      // Yellow cursor
    link: "#00d4d4",        // Cyan links
    linkActive: "#fcee0a",  // Yellow active links
    console: "#fcee0a",     // Yellow console
    debugToken: "#5ce5d5",
    errorToken: "#ff2a6d",
    infoToken: "#00d4d4",
    warnToken: "#ffb020",
  },
};
