/**
 * Cyberdeck Monochrome P7 - Light Monochrome Terminal
 * P7 phosphor: blue-white spot color with greenish-yellow persistence decay
 * Classic oscilloscope / radar screen aesthetic
 */
module.exports = {
  name: "Cyberdeck Monochrome P7",
  type: "light", // vs (light theme!)

  // ==========================================================================
  // BACKGROUND COLORS - P7 blue-white phosphor glow
  // ==========================================================================
  bg: {
    base: "#E8F0F8",        // Cool blue-white (main editor)
    darker: "#DCE8F0",      // Slightly darker blue-white (sidebar)
    elevated: "#F0F6FC",    // Bright blue-white (panels, dropdowns)
    highlight: "#D0E0F0",   // Blue tinted highlight
    selection: "#C0D8E8",   // Soft blue selection
    hover: "#E0ECF4",       // Subtle blue-white hover
    inactive: "#E4ECF4",    // Muted blue-white unfocused
    debug: "#D8E8F0",       // Cool blue-white debug toolbar
  },

  // ==========================================================================
  // FOREGROUND / TEXT COLORS - Dark blue-gray on blue-white
  // ==========================================================================
  fg: {
    base: "#1a2830",        // Dark blue-gray (main text)
    muted: "#3a4850",       // Blue-gray (sidebar text)
    dimmed: "#6080a0",      // Muted blue-gray (line numbers)
    bright: "#0a1820",      // Near black blue
    soft: "#4a6070",        // Soft blue-gray for hints
    inactive: "#8098a8",    // Light blue-gray
  },

  // ==========================================================================
  // ACCENT COLORS - P7 greenish-yellow persistence decay
  // ==========================================================================
  accent: {
    primary: "#708800",     // Greenish-yellow (persistence color)
    secondary: "#889000",   // Brighter yellow-green
    pink: "#607800",        // Muted green-yellow
    hotPink: "#809800",     // Bright for status
    magenta: "#506800",     // Deep green-yellow
  },

  // ==========================================================================
  // SYNTAX HIGHLIGHTING - Monochrome blue-gray with yellow-green accents
  // ==========================================================================
  syntax: {
    function: "#708800",    // Greenish-yellow (persistence glow)
    type: "#1a2830",        // Dark blue-gray
    string: "#607000",      // Olive green
    builtin: "#405060",     // Blue-gray
    keyword: "#0a1820",     // Near black (prominent)
    storage: "#506800",     // Deep green-yellow
    namespace: "#3a4850",   // Muted blue-gray
    attribute: "#809000",   // Bright yellow-green
    comment: "#7090a0",     // Light blue-gray (recedes)
    punctuation: "#4a5860", // Medium blue-gray
    property: "#2a3840",    // Dark blue-gray
    constant: "#788800",    // Yellow-green
    number: "#607800",      // Green-yellow
    escape: "#889000",      // Bright yellow-green
    invalid: "#b0c0c8",     // Light muted
    error: "#a02020",       // Red for errors
  },

  // ==========================================================================
  // UI STATE COLORS
  // ==========================================================================
  state: {
    error: "#a02020",       // Red
    errorBg: "#f8e0e0",     // Light red background
    warning: "#808000",     // Olive
    info: "#3a4850",        // Blue-gray
    hint: "#607800",        // Green-yellow
    success: "#608000",     // Olive green
    added: "#e0f0e0",       // Light green tint
    deleted: "#f8e0e0",     // Light red tint
    modified: "#f0f0d0",    // Light yellow tint
  },

  // ==========================================================================
  // TERMINAL ANSI COLORS - P7 inspired (blue-gray base, yellow-green accents)
  // ==========================================================================
  terminal: {
    black: "#1a2830",
    red: "#a02020",
    green: "#608000",       // Olive green (persistence color)
    yellow: "#808800",      // Yellow-green
    blue: "#3a5060",        // Blue-gray
    magenta: "#506060",     // Muted blue-gray
    cyan: "#607800",        // Green-yellow as cyan
    white: "#d0dce4",
    brightBlack: "#4a5860",
    brightRed: "#c03030",
    brightGreen: "#709000",
    brightYellow: "#909800",
    brightBlue: "#4a6070",
    brightMagenta: "#607070",
    brightCyan: "#708800",
    brightWhite: "#e8f0f8",
  },

  // ==========================================================================
  // SPECIAL COLORS
  // ==========================================================================
  special: {
    cursor: "#1a2830",      // Dark blue-gray cursor
    link: "#506800",        // Green-yellow links
    linkActive: "#708800",  // Bright yellow-green active
    console: "#607800",     // Green-yellow
    debugToken: "#3a4850",
    errorToken: "#a02020",
    infoToken: "#405060",
    warnToken: "#808000",
  },
};
