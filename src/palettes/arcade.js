/**
 * Cyberdeck Arcade - 80s Arcade Cabinet Aesthetic
 * Bold neon on deep purple-black, CRT glow vibes
 */
module.exports = {
  name: "Cyberdeck Arcade",
  type: "dark", // vs-dark

  // ==========================================================================
  // BACKGROUND COLORS - Deep purple-black CRT darkness
  // ==========================================================================
  bg: {
    base: "#0d0a18",        // Deep purple-black
    darker: "#080610",      // Near black for sidebars
    elevated: "#18102a",    // Dark indigo panels
    highlight: "#2a1840",   // Subtle purple glow
    selection: "#3a1850",   // Magenta-tinted selection
    hover: "#201530",       // Purple hover
    inactive: "#0a0810",    // Very dark purple unfocused
    debug: "#2a1848",       // Purple debug toolbar
  },

  // ==========================================================================
  // FOREGROUND / TEXT COLORS - CRT phosphor warmth
  // ==========================================================================
  fg: {
    base: "#f0e8ff",        // Warm purple-white
    muted: "#a080c0",       // Purple-tinted sidebar text
    dimmed: "#6050a0",      // Muted purple (line numbers)
    bright: "#ffffff",      // Pure white
    soft: "#c8b0e0",        // Soft purple for hints
    inactive: "#504080",    // Dark purple
  },

  // ==========================================================================
  // ACCENT COLORS - Bold arcade neon
  // ==========================================================================
  accent: {
    primary: "#ff40ff",     // Hot magenta
    secondary: "#ffff00",   // Bright yellow
    pink: "#ff40ff",        // Hot magenta
    hotPink: "#00ffff",     // Cyan for status bar
    magenta: "#c020c0",     // Deep magenta
  },

  // ==========================================================================
  // SYNTAX HIGHLIGHTING - Pure arcade neon (high saturation, distinct hues)
  // ==========================================================================
  syntax: {
    function: "#ffff00",    // Bright yellow (Pac-Man)
    type: "#00ffff",        // Pure cyan (for types/classes)
    string: "#cf9cff",      // Soft lavender
    builtin: "#00ff66",     // Bright green (distinct from function)
    keyword: "#ff00ff",     // Pure magenta (maximum pop)
    storage: "#ff6600",     // Hot orange (Donkey Kong vibes)
    namespace: "#6699ff",   // Periwinkle blue (distinct from cyan)
    attribute: "#00ccff",   // Sky blue (attributes/decorators)
    comment: "#6050a0",     // Muted purple
    punctuation: "#a090c0", // Light purple-gray
    property: "#33ffcc",    // Bright aquamarine (distinct teal)
    constant: "#ff0066",    // Hot pink/red (arcade red)
    number: "#ff8800",      // Bright orange (score display)
    escape: "#ff99ff",      // Light magenta (stands out in strings)
    invalid: "#402050",     // Dark purple
    error: "#ff4040",       // Red
  },

  // ==========================================================================
  // UI STATE COLORS
  // ==========================================================================
  state: {
    error: "#ff4040",       // Red
    errorBg: "#401828",     // Dark red-purple
    warning: "#ffff00",     // Bright yellow
    info: "#00ffff",        // Cyan
    hint: "#40e0ff",        // Soft cyan
    success: "#40ff80",     // Bright green
    added: "#183828",       // Dark green
    deleted: "#381828",     // Dark red
    modified: "#ffff00",    // Bright yellow
  },

  // ==========================================================================
  // TERMINAL ANSI COLORS - Arcade cabinet palette
  // ==========================================================================
  terminal: {
    black: "#080610",
    red: "#ff4040",
    green: "#40ff80",
    yellow: "#ffff00",
    blue: "#4080ff",
    magenta: "#ff40ff",
    cyan: "#00ffff",
    white: "#6050a0",
    brightBlack: "#504080",
    brightRed: "#ff6060",
    brightGreen: "#60ffa0",
    brightYellow: "#ffff60",
    brightBlue: "#60a0ff",
    brightMagenta: "#ff80ff",
    brightCyan: "#60ffff",
    brightWhite: "#ffffff",
  },

  // ==========================================================================
  // SPECIAL COLORS
  // ==========================================================================
  special: {
    cursor: "#00ffff",      // Cyan cursor
    link: "#40e0ff",        // Soft cyan
    linkActive: "#ff40ff",  // Hot magenta
    console: "#ffff00",     // Bright yellow
    debugToken: "#b060ff",
    errorToken: "#ff4040",
    infoToken: "#00ffff",
    warnToken: "#ff8040",
  },
};
