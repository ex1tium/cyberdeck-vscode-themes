/**
 * Cyberdeck Monochrome P7 - True Monochromatic Blue-White
 *
 * Simulates authentic P7 phosphor CRT display
 * - Single blue hue family throughout
 * - No accent colors - uses typography for differentiation
 * - Tinted whites and blacks (no pure values)
 * - Period-accurate monochrome aesthetic
 */
module.exports = {
  name: "Cyberdeck Monochrome P7",
  type: "light",

  // ==========================================================================
  // BACKGROUND COLORS - Blue-tinted whites like phosphor glow
  // ==========================================================================
  bg: {
    base: "#D4E0EC",        // Main editor - noticeably blue-tinted
    darker: "#C4D4E4",      // Sidebar - slightly deeper blue
    elevated: "#DEE8F2",    // Panels, dropdowns - brighter blue-white
    highlight: "#B8CCE0",   // Selection highlight - obvious blue
    selection: "#A8C0D8",   // Text selection - saturated blue
    hover: "#CCE0F0",       // Hover states
    inactive: "#D0DCE8",    // Unfocused elements
    debug: "#C8D8E8",       // Debug toolbar
  },

  // ==========================================================================
  // FOREGROUND / TEXT - Dark blue-gray (never pure black)
  // ==========================================================================
  fg: {
    base: "#1C2C3C",        // Primary text - dark blue-gray
    muted: "#3C4C5C",       // Secondary text
    dimmed: "#5C6C7C",      // Line numbers, inactive
    bright: "#0C1C2C",      // Emphasized text - darkest blue
    soft: "#4C5C6C",        // Hints, placeholders
    inactive: "#7C8C9C",    // Disabled text
  },

  // ==========================================================================
  // ACCENT COLORS - Blue variations only (no other hues)
  // ==========================================================================
  accent: {
    primary: "#2C4C6C",     // Primary accent - medium blue
    secondary: "#3C5C7C",   // Secondary accent
    // These map to pink/magenta in the template but stay blue
    pink: "#4C6C8C",
    hotPink: "#2C4C6C",
    magenta: "#1C3C5C",
  },

  // ==========================================================================
  // SYNTAX HIGHLIGHTING - Monochromatic with typographic variation
  // Uses only blue-gray shades; differentiation via bold/italic in theme
  // ==========================================================================
  syntax: {
    function: "#2C4C6C",    // Functions - medium blue (will be normal weight)
    type: "#1C2C3C",        // Types - dark (will be bold)
    string: "#4C6080",      // Strings - medium desaturated blue
    builtin: "#3C5068",     // Built-in types - medium blue
    keyword: "#0C1C2C",     // Keywords - darkest (will be bold)
    storage: "#1C3C5C",     // Storage keywords - dark blue
    namespace: "#3C4C5C",   // Namespaces - muted
    attribute: "#2C4C68",   // Attributes - medium blue
    comment: "#6C8098",     // Comments - light blue-gray (will be italic)
    punctuation: "#4C5C6C", // Punctuation - medium gray-blue
    property: "#2C3C4C",    // Properties - dark blue-gray
    constant: "#1C3C58",    // Constants - dark blue
    number: "#3C5C78",      // Numbers - medium blue
    escape: "#1C4C6C",      // Escape sequences - darker blue
    invalid: "#8C9CAC",     // Invalid - washed out
    error: "#4C2C3C",       // Errors - dark with slight warmth (still blue family)
  },

  // ==========================================================================
  // UI STATE COLORS - Blue-shifted versions
  // ==========================================================================
  state: {
    error: "#5C3C4C",       // Errors - dark desaturated (blue-shifted maroon)
    errorBg: "#E8D8DC",     // Error background - pale with hint of warmth
    warning: "#4C4C3C",     // Warning - dark blue-shifted olive
    info: "#2C4C6C",        // Info - standard blue
    hint: "#5C6C7C",        // Hints - muted blue
    success: "#3C5C4C",     // Success - blue-shifted dark green
    added: "#D0E0D8",       // Git added - blue-green tint
    deleted: "#E0D8DC",     // Git deleted - blue-pink tint
    modified: "#D8E0E8",    // Git modified - blue tint
  },

  // ==========================================================================
  // TERMINAL - Monochrome blue-gray ANSI approximations
  // ==========================================================================
  terminal: {
    black: "#1C2C3C",
    red: "#5C4C5C",         // Desaturated, blue-shifted
    green: "#4C5C5C",       // Desaturated, blue-shifted
    yellow: "#5C5C4C",      // Desaturated, blue-shifted
    blue: "#3C4C6C",
    magenta: "#4C4C5C",
    cyan: "#4C5C6C",
    white: "#C4D4E4",
    brightBlack: "#4C5C6C",
    brightRed: "#6C5C6C",
    brightGreen: "#5C6C6C",
    brightYellow: "#6C6C5C",
    brightBlue: "#4C5C7C",
    brightMagenta: "#5C5C6C",
    brightCyan: "#5C6C7C",
    brightWhite: "#DEE8F2",
  },

  // ==========================================================================
  // SPECIAL COLORS
  // ==========================================================================
  special: {
    cursor: "#1C2C3C",      // Dark blue-gray cursor
    link: "#2C4C6C",        // Links - medium blue
    linkActive: "#1C3C5C",  // Active links - darker
    console: "#2C4C6C",
    debugToken: "#3C4C5C",
    errorToken: "#5C3C4C",
    infoToken: "#3C5068",
    warnToken: "#4C4C3C",
  },
};
