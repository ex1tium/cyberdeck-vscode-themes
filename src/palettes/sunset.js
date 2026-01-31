/**
 * Cyberdeck Sunset - Warm Neon Palette
 * Blade Runner inspired - vibrant neon on deep burgundy
 */
module.exports = {
  name: "Cyberdeck Sunset",
  type: "dark", // vs-dark

  // ==========================================================================
  // BACKGROUND COLORS
  // ==========================================================================
  bg: {
    base: "#1a0a12",        // Deep burgundy-black
    darker: "#120810",      // Deeper for sidebars
    elevated: "#2d1520",    // Borders, elevated surfaces
    highlight: "#4a1a2a",   // Find matches
    selection: "#5c2535",   // Editor selection
    hover: "#3d1525",       // List hover states
    inactive: "#1f0a10",    // Unfocused tab background
    debug: "#6b2040",       // Debug toolbar
  },

  // ==========================================================================
  // FOREGROUND / TEXT COLORS
  // ==========================================================================
  fg: {
    base: "#f0e0d8",        // Warm cream
    muted: "#d0b8b0",       // Secondary text
    dimmed: "#8a5a60",      // Line numbers, descriptions
    bright: "#fff8f0",      // High contrast text
    soft: "#ffccaa",        // Suggest widget, hints
    inactive: "#7a4050",    // Inactive tab text
  },

  // ==========================================================================
  // ACCENT COLORS
  // ==========================================================================
  accent: {
    primary: "#ff6b35",     // Vibrant orange
    secondary: "#e84855",   // Bright red-coral
    pink: "#ff3366",        // Hot pink-red
    hotPink: "#ff2d55",     // Neon red for status
    magenta: "#ff0066",     // Hot magenta for keywords
  },

  // ==========================================================================
  // SYNTAX HIGHLIGHTING
  // ==========================================================================
  syntax: {
    function: "#7dcea0",    // Soft sage green (contrast)
    type: "#f0c878",        // Light warm gold
    string: "#ffd93d",      // Bright golden yellow
    builtin: "#ff9f43",     // Bright orange
    keyword: "#ff6b8a",     // Soft coral-pink
    storage: "#ff6b35",     // Vibrant orange
    namespace: "#e0a0b0",   // Dusty rose (distinct!)
    attribute: "#f8e8d0",   // Ivory cream (light)
    comment: "#7a5060",     // Muted mauve
    punctuation: "#d0b8b0", // Muted warm gray
    property: "#c8e0a0",    // Soft lime-cream (green tint)
    constant: "#ff8866",    // Soft coral
    number: "#e080c0",      // Dusty pink-purple (distinct!)
    escape: "#f0c878",      // Light gold
    invalid: "#8b3040",     // Dark rose
    error: "#ff2d55",       // Neon red
  },

  // ==========================================================================
  // UI STATE COLORS
  // ==========================================================================
  state: {
    error: "#ff2d55",       // Neon red
    errorBg: "#5a1025",     // Dark red background
    warning: "#ffd93d",     // Bright yellow
    info: "#ff6b35",        // Orange info
    hint: "#00e5a0",        // Teal hint
    success: "#00e5a0",     // Teal success
    added: "#1a5040",       // Dark teal
    deleted: "#5a1025",     // Dark red
    modified: "#ffd93d",    // Yellow
  },

  // ==========================================================================
  // TERMINAL ANSI COLORS
  // ==========================================================================
  terminal: {
    black: "#120810",
    red: "#ff2d55",
    green: "#7dcea0",
    yellow: "#ffd93d",
    blue: "#e8b060",
    magenta: "#ff6b8a",
    cyan: "#f0c070",
    white: "#8a5a60",
    brightBlack: "#5c3040",
    brightRed: "#ff8866",
    brightGreen: "#a0e0b0",
    brightYellow: "#ffe566",
    brightBlue: "#f0c878",
    brightMagenta: "#ff8899",
    brightCyan: "#f8d090",
    brightWhite: "#fff8f0",
  },

  // ==========================================================================
  // SPECIAL COLORS
  // ==========================================================================
  special: {
    cursor: "#ff6b35",
    link: "#e8b060",
    linkActive: "#ff6b35",
    console: "#ffd93d",
    debugToken: "#ff9500",
    errorToken: "#ff2d55",
    infoToken: "#e8b060",
    warnToken: "#ffd93d",
  },
};
