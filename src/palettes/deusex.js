/**
 * Cyberdeck Deus Ex - Human Revolution / Mankind Divided Palette
 * Authentic game colors - gold spectrum, platinum chrome, alert orange
 *
 * Color sources:
 * - Gold UI: #fff69f, #fdd870, #d0902f, #a15501
 * - Platinum/chrome: augmentation limbs, UI highlights
 * - Alert orange/red: enemy markers, warnings
 * - Muted green
 * - Steel blue-gray: Prague night, environment accents
 */
module.exports = {
  name: "Cyberdeck Deus Ex",
  type: "dark", // vs-dark

  // ==========================================================================
  // BACKGROUND COLORS - Near true black for terminal aesthetic
  // ==========================================================================
  bg: {
    base: "#0a0800",        // Near true black (terminal aesthetic)
    darker: "#050400",      // True black for sidebars
    elevated: "#141008",    // Subtle lift
    highlight: "#1a1608",   // Selection highlight
    selection: "#282010",   // Active selection
    hover: "#141008",       // Hover state
    inactive: "#060400",    // Unfocused
    debug: "#181408",       // Debug toolbar
  },

  // ==========================================================================
  // FOREGROUND / TEXT COLORS - Bright gold-cream
  // ==========================================================================
  fg: {
    base: "#fff69f",        // Bright pale gold (game UI)
    muted: "#b49125",       // Olive gold
    dimmed: "#706010",      // Line numbers (brightened for dark bg)
    bright: "#ffffc0",      // Near white gold
    soft: "#e5d080",        // Soft gold
    inactive: "#7a6818",    // Inactive (brightened)
  },

  // ==========================================================================
  // ACCENT COLORS - Authentic game spectrum
  // ==========================================================================
  accent: {
    primary: "#fdd870",     // Golden yellow (main UI)
    secondary: "#c0b8b0",   // Platinum/chrome (augmentations)
    tertiary: "#d0902f",    // Deep amber
    rust: "#a15501",        // Burnt orange
    dark: "#351409",        // Dark brown
  },

  // ==========================================================================
  // SYNTAX HIGHLIGHTING - Full authentic spectrum with good contrast
  // ==========================================================================
  syntax: {
    keyword: "#fdd870",     // Golden yellow - keywords
    function: "#ffe8a0",    // Pale platinum-gold - functions (bright, distinct)
    type: "#c0b8b0",        // Platinum/chrome - types (aug aesthetic)
    string: "#d0902f",      // Deep amber - strings
    builtin: "#e0d8d0",     // Pale platinum - builtins
    storage: "#e5af2e",     // Golden amber - storage
    namespace: "#a15501",   // Burnt orange - namespaces
    attribute: "#fdd870",   // Golden yellow - decorators
    comment: "#706010",     // Olive - comments (brightened for dark bg)
    punctuation: "#9a8828", // Mid olive - punctuation
    property: "#e5af2e",    // Golden amber - properties
    constant: "#ffea21",    // Bright yellow - constants
    number: "#ff9020",      // Bright orange - numbers (alert color)
    escape: "#c0b8b0",      // Platinum - escapes
    invalid: "#351409",     // Dark brown
    error: "#ff4030",       // Alert red
  },

  // ==========================================================================
  // UI STATE COLORS - Authentic alert system
  // ==========================================================================
  state: {
    error: "#ff4030",       // Alert red
    errorBg: "#2a1008",     // Dark red bg
    warning: "#ff9020",     // Alert orange
    info: "#8090a0",        // Steel blue-gray (subtle)
    hint: "#c0b8b0",        // Platinum hint
    success: "#80a040",     // Muted green
    added: "#1a2810",       // Dark green
    deleted: "#2a1008",     // Dark red
    modified: "#fdd870",    // Gold
  },

  // ==========================================================================
  // TERMINAL ANSI COLORS
  // ==========================================================================
  terminal: {
    black: "#050400",       // True black
    red: "#ff4030",         // Alert red
    green: "#80a040",       // Hacking green
    yellow: "#fdd870",      // Golden yellow
    blue: "#8090a0",        // Steel blue-gray
    magenta: "#c090a0",     // Muted rose
    cyan: "#a0b0b8",        // Pale steel
    white: "#706010",       // Olive (brightened)
    brightBlack: "#7a6818",
    brightRed: "#ff6050",
    brightGreen: "#a0c060",
    brightYellow: "#ffea21",
    brightBlue: "#a0b0c0",
    brightMagenta: "#d0a0b0",
    brightCyan: "#b8c8d0",
    brightWhite: "#ffffc0",
  },

  // ==========================================================================
  // SPECIAL COLORS
  // ==========================================================================
  special: {
    cursor: "#ffea21",      // Bright yellow
    link: "#c0b8b0",        // Platinum links
    linkActive: "#ffea21",  // Bright yellow active
    console: "#fdd870",     // Golden
    debugToken: "#c0b8b0",
    errorToken: "#ff4030",
    infoToken: "#8090a0",
    warnToken: "#ff9020",
  },
};
