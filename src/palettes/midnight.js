/**
 * Cyberdeck Midnight - Blue-shifted Variant
 * Cool blue tones with electric accents
 */
module.exports = {
  name: "Cyberdeck Midnight",
  type: "dark",

  // ==========================================================================
  // BACKGROUND COLORS - Deep blue-black tones
  // ==========================================================================
  bg: {
    base: "#0a0e18",
    darker: "#060a12",
    elevated: "#141c2a",
    highlight: "#1a2840",
    selection: "#243555",
    hover: "#1e2d45",
    inactive: "#0c1220",
    debug: "#1a3a6a",
  },

  // ==========================================================================
  // FOREGROUND / TEXT COLORS - Cool blue-white
  // ==========================================================================
  fg: {
    base: "#c8d4e8",
    muted: "#8ca8c8",       // Blue-tinted sidebar text
    dimmed: "#4a6090",
    bright: "#e4ecf8",
    soft: "#b8c8e8",
    inactive: "#506080",
  },

  // ==========================================================================
  // ACCENT COLORS - Electric blues and cyans
  // ==========================================================================
  accent: {
    primary: "#4090ff",
    secondary: "#3080e0",
    pink: "#e060a0",
    hotPink: "#d050a0",
    magenta: "#c048b0",
  },

  // ==========================================================================
  // SYNTAX HIGHLIGHTING - Electric blue palette
  // ==========================================================================
  syntax: {
    function: "#50e8a0",
    type: "#60c8e8",
    string: "#e8c050",
    builtin: "#a0e850",
    keyword: "#c048b0",
    storage: "#e88040",
    namespace: "#40c8f0",
    attribute: "#70a8f0",
    comment: "#4868a0",
    punctuation: "#a8b8d0",
    property: "#c8c088",
    constant: "#e060a0",
    number: "#a070f0",
    escape: "#60c8e8",
    invalid: "#805850",
    error: "#c02050",
  },

  // ==========================================================================
  // UI STATE COLORS
  // ==========================================================================
  state: {
    error: "#4090ff",
    errorBg: "#c02050",
    warning: "#e8c050",
    info: "#4090ff",
    hint: "#50c880",
    success: "#50c880",
    added: "#186850",
    deleted: "#c03050",
    modified: "#e8c050",
  },

  // ==========================================================================
  // TERMINAL ANSI COLORS
  // ==========================================================================
  terminal: {
    black: "#060a12",
    red: "#d050a0",
    green: "#50c880",
    yellow: "#e8c050",
    blue: "#60c8e8",
    magenta: "#a070f0",
    cyan: "#50e0f0",
    white: "#4a6090",
    brightBlack: "#3868a0",
    brightRed: "#d050a0",
    brightGreen: "#50c880",
    brightYellow: "#e8c050",
    brightBlue: "#50e0f0",
    brightMagenta: "#a070f0",
    brightCyan: "#50e0f0",
    brightWhite: "#e4ecf8",
  },

  // ==========================================================================
  // SPECIAL COLORS
  // ==========================================================================
  special: {
    cursor: "#60c8e8",
    link: "#5098c0",
    linkActive: "#4090ff",
    console: "#e0e040",
    debugToken: "#8068d0",
    errorToken: "#d05060",
    infoToken: "#5090d0",
    warnToken: "#c09030",
  },
};
