/**
 * Cyberdeck Tron - Tron Legacy Digital Grid Palette
 * True OLED blacks with program cyan and CLU orange
 *
 * Color sources:
 * - The Grid: Pure black void (#000000)
 * - Program cyan: #00FFFF, #00D4FF (identity disc trails)
 * - CLU/Rinzler orange: #FF6600, #FF9500 (antagonist glow)
 * - User white: #FFFFFF (Flynn, special programs)
 * - Grid lines: Subtle blue-gray traces
 */
module.exports = {
  name: "Cyberdeck Tron",
  type: "dark", // vs-dark

  // ==========================================================================
  // BACKGROUND COLORS - True OLED black void
  // ==========================================================================
  bg: {
    base: "#000000",        // Pure OLED black (The Grid void)
    darker: "#000000",      // True black sidebars
    elevated: "#0a0a10",    // Barely visible lift
    highlight: "#101018",   // Subtle grid highlight
    selection: "#182030",   // Selection with cyan tint
    hover: "#080810",       // Hover state
    inactive: "#000000",    // Unfocused (pure black)
    debug: "#0c0c14",       // Debug toolbar
  },

  // ==========================================================================
  // FOREGROUND / TEXT COLORS - Cool white with cyan tint
  // ==========================================================================
  fg: {
    base: "#e0e8f0",        // Cool white (program text)
    muted: "#8090a0",       // Muted blue-gray
    dimmed: "#405060",      // Line numbers (grid traces)
    bright: "#ffffff",      // Pure white (User glow)
    soft: "#b0c0d0",        // Soft cyan-white
    inactive: "#304050",    // Inactive text
  },

  // ==========================================================================
  // ACCENT COLORS - Program cyan and CLU orange
  // ==========================================================================
  accent: {
    primary: "#00ffff",     // Program cyan (identity)
    secondary: "#ff6600",   // CLU orange (antagonist)
    tertiary: "#ffffff",    // User white (special)
    teal: "#00d4d4",        // Deep cyan
    amber: "#ffaa00",       // Light orange
  },

  // ==========================================================================
  // SYNTAX HIGHLIGHTING - Maximum distinction neons
  // ==========================================================================
  syntax: {
    keyword: "#ff6600",     // CLU orange - keywords (power/control)
    function: "#ffffff",    // Pure white - functions (User-created)
    type: "#00ffff",        // Program cyan - types/classes
    string: "#ffaa00",      // Amber - strings (warm data)
    builtin: "#40e0ff",     // Light cyan - built-ins
    storage: "#00d4d4",     // Teal - storage modifiers
    namespace: "#0099cc",   // Deep cyan - namespaces
    attribute: "#ff9500",   // Light orange - decorators
    comment: "#406080",     // Dim blue-gray - comments (receding)
    punctuation: "#608090", // Grid gray - punctuation
    property: "#00d4d4",    // Teal - properties
    constant: "#ffffff",    // Pure white - constants (immutable)
    number: "#ff9500",      // Light orange - numbers
    escape: "#00ffff",      // Program cyan - escapes
    invalid: "#181820",     // Near black - invalid
    error: "#ff3030",       // Bright red - errors
  },

  // ==========================================================================
  // UI STATE COLORS - Digital alerts
  // ==========================================================================
  state: {
    error: "#ff3030",       // Alert red
    errorBg: "#200808",     // Dark red bg
    warning: "#ff9500",     // Orange warning
    info: "#00d4ff",        // Bright cyan info
    hint: "#00ffff",        // Program cyan hint
    success: "#00ff80",     // Green success
    added: "#082018",       // Dark green
    deleted: "#200808",     // Dark red
    modified: "#ff6600",    // CLU orange
  },

  // ==========================================================================
  // TERMINAL ANSI COLORS - Grid palette
  // ==========================================================================
  terminal: {
    black: "#000000",       // True black
    red: "#ff3030",         // Alert red
    green: "#00ff80",       // Success green
    yellow: "#ffaa00",      // Amber
    blue: "#0099cc",        // Deep cyan
    magenta: "#ff6600",     // Orange (no magenta in Tron)
    cyan: "#00ffff",        // Program cyan
    white: "#608090",       // Grid gray
    brightBlack: "#405060",
    brightRed: "#ff5050",
    brightGreen: "#40ffa0",
    brightYellow: "#ffc040",
    brightBlue: "#00d4ff",
    brightMagenta: "#ff9500",
    brightCyan: "#40ffff",
    brightWhite: "#ffffff",
  },

  // ==========================================================================
  // SPECIAL COLORS
  // ==========================================================================
  special: {
    cursor: "#00ffff",      // Program cyan cursor
    link: "#00d4ff",        // Bright cyan links
    linkActive: "#ffffff",  // Pure white active
    console: "#00ffff",     // Program cyan console
    debugToken: "#00d4ff",
    errorToken: "#ff3030",
    infoToken: "#00d4ff",
    warnToken: "#ff9500",
  },
};
