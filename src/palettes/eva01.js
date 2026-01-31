/**
 * Cyberdeck EVA-01 - Neon Genesis Evangelion Unit-01 Palette
 * The iconic purple and fluorescent green of Shinji's Evangelion
 *
 * Base colors from EVA Unit-01:
 * - #1d1a2f - Deep purple-black (dark areas)
 * - #965fd4 - Bright purple (main body)
 * - #734f9a - Dark purple (shadows)
 * - #8bd450 - Fluorescent green (accents)
 * - #3f6d4e - Forest green (depth)
 * - #e9a836 - Amber orange (eyes/core)
 */
module.exports = {
  name: "Cyberdeck EVA-01",
  type: "dark", // vs-dark

  // ==========================================================================
  // BACKGROUND COLORS - Deep purple-black like NERV headquarters
  // ==========================================================================
  bg: {
    base: "#1d1a2f",        // Deep purple-black
    darker: "#14121f",      // Near black for sidebars
    elevated: "#282440",    // Slightly lighter panels
    highlight: "#362f50",   // Subtle highlight
    selection: "#443a60",   // Selection with purple tint
    hover: "#241f38",       // Hover state
    inactive: "#18152a",    // Unfocused
    debug: "#2a2545",       // Debug toolbar
  },

  // ==========================================================================
  // FOREGROUND / TEXT COLORS - Light lavender tints
  // ==========================================================================
  fg: {
    base: "#e0dce8",        // Light lavender-gray
    muted: "#a8a0b8",       // Muted purple-gray
    dimmed: "#605878",      // Line numbers
    bright: "#f4f0ff",      // Bright lavender-white
    soft: "#c8c0d8",        // Soft lavender for hints
    inactive: "#504860",    // Inactive text
  },

  // ==========================================================================
  // ACCENT COLORS - EVA-01's signature purple, green, and amber
  // ==========================================================================
  accent: {
    primary: "#965fd4",     // Bright purple (main body)
    secondary: "#8bd450",   // Fluorescent green (accents)
    tertiary: "#e9a836",    // Amber orange (eyes/core)
    dark: "#734f9a",        // Dark purple (shadows)
    deep: "#3f6d4e",        // Forest green (depth)
  },

  // ==========================================================================
  // SYNTAX HIGHLIGHTING - Vibrant EVA-01 colors
  // ==========================================================================
  syntax: {
    keyword: "#965fd4",     // Bright purple - keywords
    function: "#8bd450",    // Fluorescent green - function names
    type: "#b088e0",        // Light purple - types/classes
    string: "#e9a836",      // Amber - strings
    builtin: "#734f9a",     // Dark purple - built-in types
    storage: "#c878d8",     // Pink-purple - storage modifiers
    namespace: "#7c60b0",   // Mid purple - namespaces
    attribute: "#e9a836",   // Amber - decorators/attributes
    comment: "#605878",     // Muted purple-gray - comments
    punctuation: "#908898", // Gray-purple - punctuation
    property: "#6cb848",    // Mid green - object properties
    constant: "#e9a836",    // Amber - constants
    number: "#f0b840",      // Bright amber - numbers
    escape: "#d0e080",      // Yellow-green - escape sequences
    invalid: "#3a3050",     // Dark muted - invalid
    error: "#e05050",       // Red (blood sky) - errors
  },

  // ==========================================================================
  // UI STATE COLORS - NERV alert tones
  // ==========================================================================
  state: {
    error: "#e05050",       // Blood red
    errorBg: "#2f1a28",     // Dark red background
    warning: "#e9a836",     // Amber warning
    info: "#965fd4",        // Purple info
    hint: "#8bd450",        // Green hint
    success: "#8bd450",     // Green success
    added: "#1a2f20",       // Dark green
    deleted: "#2f1a20",     // Dark red
    modified: "#e9a836",    // Amber modified
  },

  // ==========================================================================
  // TERMINAL ANSI COLORS - EVA-01 aesthetic
  // ==========================================================================
  terminal: {
    black: "#14121f",
    red: "#e05050",         // Blood red
    green: "#8bd450",       // Fluorescent green
    yellow: "#e9a836",      // Amber
    blue: "#734f9a",        // Dark purple
    magenta: "#965fd4",     // Bright purple
    cyan: "#50c8a0",        // Teal-green (LCL fluid)
    white: "#605878",       // Muted
    brightBlack: "#504860",
    brightRed: "#f06868",   // Lighter red
    brightGreen: "#a8e068", // Lighter green
    brightYellow: "#f0c850",// Lighter amber
    brightBlue: "#8870b8",  // Lighter purple
    brightMagenta: "#b088e0",// Light purple
    brightCyan: "#68d8b0",  // Lighter teal
    brightWhite: "#f4f0ff", // Bright lavender
  },

  // ==========================================================================
  // SPECIAL COLORS
  // ==========================================================================
  special: {
    cursor: "#8bd450",      // Green cursor (like EVA's eyes)
    link: "#965fd4",        // Purple links
    linkActive: "#8bd450",  // Green active links
    console: "#8bd450",     // Green console
    debugToken: "#b088e0",
    errorToken: "#e05050",
    infoToken: "#965fd4",
    warnToken: "#e9a836",
  },
};
