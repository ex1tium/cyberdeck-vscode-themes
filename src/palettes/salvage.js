/**
 * Cyberdeck Salvage - Industrial Outlands Palette
 * Weathered bronze and atmospheric teal, inspired by mech salvage yards
 * and the "used future" aesthetic of industrial cyberpunk
 *
 * Base colors from reference:
 * - #8f704b - Dusty bronze (rust/patina)
 * - #daae6d - Golden brass (warm metal)
 * - #89e3f6 - Bright cyan (atmospheric glow)
 * - #4d9e9b - Teal (mid-tone atmosphere)
 * - #44786a - Dark teal (shadows/depth)
 */
module.exports = {
  name: "Cyberdeck Salvage",
  type: "dark", // vs-dark

  // ==========================================================================
  // BACKGROUND COLORS - Deep teal-charcoal, like industrial smog at night
  // ==========================================================================
  bg: {
    base: "#1a2422",        // Dark teal-charcoal
    darker: "#141c1a",      // Near black for sidebars
    elevated: "#243230",    // Slightly lighter panels
    highlight: "#2e3e3a",   // Subtle highlight
    selection: "#3a4e48",   // Selection with teal tint
    hover: "#283634",       // Hover state
    inactive: "#181f1d",    // Unfocused
    debug: "#2a3830",       // Debug toolbar
  },

  // ==========================================================================
  // FOREGROUND / TEXT COLORS - Warm gray with slight teal influence
  // ==========================================================================
  fg: {
    base: "#d4d0c8",        // Warm light gray (like aged paper)
    muted: "#9a9690",       // Muted warm gray
    dimmed: "#5a5850",      // Line numbers (rust-tinged)
    bright: "#f0ece4",      // Off-white (warm)
    soft: "#b8b4ac",        // Soft gray for hints
    inactive: "#4a4842",    // Inactive text
  },

  // ==========================================================================
  // ACCENT COLORS - Bronze, cyan, and teal from the reference
  // ==========================================================================
  accent: {
    primary: "#daae6d",     // Golden brass (warm metal)
    secondary: "#89e3f6",   // Bright cyan (atmospheric glow)
    tertiary: "#4d9e9b",    // Teal (mid atmosphere)
    rust: "#8f704b",        // Dusty bronze (patina)
    deep: "#44786a",        // Dark teal (depth)
  },

  // ==========================================================================
  // SYNTAX HIGHLIGHTING - Expanded palette maintaining industrial warmth
  // ==========================================================================
  syntax: {
    keyword: "#daae6d",     // Golden brass - primary keywords
    function: "#89e3f6",    // Bright cyan - function names
    type: "#4d9e9b",        // Teal - types/classes
    string: "#c9856a",      // Weathered coral - strings (complements teal)
    builtin: "#7cc4b8",     // Pale mint - built-in types
    storage: "#b08090",     // Dusty rose - storage modifiers
    namespace: "#8a80a8",   // Muted lavender - namespaces
    attribute: "#d4a060",   // Warm amber - decorators/attributes
    comment: "#5a6860",     // Muted teal-gray - comments
    punctuation: "#8a8680", // Neutral gray - punctuation
    property: "#6eb8b0",    // Soft teal - object properties
    constant: "#8f704b",    // Dusty bronze - constants
    number: "#d4a054",      // Amber gold - numbers
    escape: "#e8b878",      // Light bronze - escape sequences
    invalid: "#3a4240",     // Dark muted - invalid
    error: "#c45a4a",       // Rust red - errors
  },

  // ==========================================================================
  // UI STATE COLORS - Industrial warning tones
  // ==========================================================================
  state: {
    error: "#c45a4a",       // Rust red
    errorBg: "#2a2220",     // Dark rust background
    warning: "#daae6d",     // Bronze warning
    info: "#89e3f6",        // Cyan info
    hint: "#4d9e9b",        // Teal hint
    success: "#4d9e9b",     // Teal success
    added: "#1a2e28",       // Dark teal-green
    deleted: "#2e2220",     // Dark rust
    modified: "#daae6d",    // Bronze modified
  },

  // ==========================================================================
  // TERMINAL ANSI COLORS - Salvage aesthetic
  // ==========================================================================
  terminal: {
    black: "#141c1a",
    red: "#c45a4a",         // Rust red
    green: "#4d9e9b",       // Teal
    yellow: "#daae6d",      // Golden brass
    blue: "#44786a",        // Dark teal
    magenta: "#b08090",     // Dusty rose
    cyan: "#89e3f6",        // Bright cyan
    white: "#5a5850",       // Muted
    brightBlack: "#4a4842",
    brightRed: "#d47060",   // Lighter rust
    brightGreen: "#6eb8b0", // Soft teal
    brightYellow: "#e8c080",// Lighter brass
    brightBlue: "#5a9890",  // Mid teal
    brightMagenta: "#c898a0",// Lighter rose
    brightCyan: "#a0ecf8",  // Pale cyan
    brightWhite: "#f0ece4", // Warm white
  },

  // ==========================================================================
  // SPECIAL COLORS
  // ==========================================================================
  special: {
    cursor: "#daae6d",      // Bronze cursor
    link: "#89e3f6",        // Cyan links
    linkActive: "#daae6d",  // Bronze active links
    console: "#daae6d",     // Bronze console
    debugToken: "#4d9e9b",
    errorToken: "#c45a4a",
    infoToken: "#89e3f6",
    warnToken: "#d4a054",
  },
};
