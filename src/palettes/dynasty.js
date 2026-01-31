/**
 * Cyberdeck Dynasty - Chinese Luxury meets 80s Retro Computing
 * Warm amber/gold dominant with jade green as single cool accent
 */
module.exports = {
  name: "Cyberdeck Dynasty",
  type: "dark", // vs-dark

  // ==========================================================================
  // BACKGROUND COLORS - Deep lacquer black with warm undertones
  // ==========================================================================
  bg: {
    base: "#121210",        // Near black lacquer
    darker: "#0a0908",      // Deep black for sidebars
    elevated: "#1e1814",    // Dark warm bronze
    highlight: "#2d1a16",   // Subtle crimson highlight
    selection: "#3d2018",   // Dark red-brown selection
    hover: "#241612",       // Warm hover
    inactive: "#0e0c0a",    // Very dark warm
    debug: "#4a1a18",       // Dark crimson debug
  },

  // ==========================================================================
  // FOREGROUND / TEXT COLORS - Warm ivory and amber
  // ==========================================================================
  fg: {
    base: "#e8d8c8",        // Warm ivory/parchment
    muted: "#c0986e",       // Amber gold sidebar text
    dimmed: "#6a5040",      // Warm brown (line numbers)
    bright: "#fff0e0",      // Bright warm white
    soft: "#d8c0a0",        // Soft gold for hints
    inactive: "#5a4838",    // Dark warm brown
  },

  // ==========================================================================
  // ACCENT COLORS - Imperial crimson and gold
  // ==========================================================================
  accent: {
    primary: "#d42020",     // Brighter cinnabar crimson
    secondary: "#c89830",   // Bright goldenrod
    pink: "#d4a040",        // Amber gold
    hotPink: "#d42020",     // Crimson for status
    magenta: "#b01818",     // Deep crimson
  },

  // ==========================================================================
  // SYNTAX HIGHLIGHTING - Warm metals palette with jade accent
  // ==========================================================================
  syntax: {
    function: "#50c878",    // Jade green (THE cool accent - stands out)
    type: "#e0b040",        // Bright gold (for variables/types)
    string: "#f0a878",      // Peach - auspicious
    builtin: "#e88030",     // Realgar orange (bright, distinct)
    keyword: "#e03030",     // Bright vermillion
    storage: "#d06828",     // Deep orange-bronze
    namespace: "#a08058",   // Bronze (brown-gold neutral)
    attribute: "#d4a040",   // Amber gold
    comment: "#6a5040",     // Warm brown
    punctuation: "#e03030", // Muted warm tan
    property: "#c08050",    // Copper-bronze (distinct from type)
    constant: "#e86850",    // Coral vermillion
    number: "#d090a0",      // Dusty rose (pink - distinct!)
    escape: "#70b8a0",      // Muted jade (secondary cool)
    invalid: "#5a3028",     // Dark red-brown
    error: "#ff3030",       // Bright red
  },

  // ==========================================================================
  // UI STATE COLORS
  // ==========================================================================
  state: {
    error: "#ff3030",       // Bright red
    errorBg: "#3a1515",     // Dark red background
    warning: "#f0c040",     // Imperial yellow
    info: "#d4a040",        // Amber gold (warm info)
    hint: "#50c878",        // Jade green
    success: "#50c878",     // Jade green
    added: "#1a3828",       // Dark jade
    deleted: "#3a1515",     // Dark red
    modified: "#f0c040",    // Imperial yellow
  },

  // ==========================================================================
  // TERMINAL ANSI COLORS - Warm Chinese palette
  // ==========================================================================
  terminal: {
    black: "#0a0908",
    red: "#d42020",
    green: "#50c878",       // Jade green
    yellow: "#f0c040",
    blue: "#b89068",        // Bronze (warm substitute)
    magenta: "#d090a0",     // Dusty rose
    cyan: "#70b8a0",        // Muted jade
    white: "#6a5040",
    brightBlack: "#5a4838",
    brightRed: "#e86850",
    brightGreen: "#68d890",
    brightYellow: "#ffd060",
    brightBlue: "#c8a078",
    brightMagenta: "#e0a0b0",
    brightCyan: "#88d0b0",
    brightWhite: "#fff0e0",
  },

  // ==========================================================================
  // SPECIAL COLORS
  // ==========================================================================
  special: {
    cursor: "#d4a040",      // Amber gold cursor
    link: "#c8a048",        // Amber
    linkActive: "#d42020",  // Crimson
    console: "#f0c040",     // Imperial yellow
    debugToken: "#d4a040",
    errorToken: "#ff3030",
    infoToken: "#c8a048",
    warnToken: "#f0c040",
  },
};
