/**
 * Cyberdeck Monochrome Green - OLED Monochrome Terminal
 * IBM 5151/P39 phosphor CRT aesthetic on true black
 */
module.exports = {
  name: "Cyberdeck Monochrome Green",
  type: "dark", // vs-dark

  // ==========================================================================
  // BACKGROUND COLORS
  // ==========================================================================
  bg: {
    base: "#000000",        // True OLED black
    darker: "#000000",      // Pure black for sidebars
    elevated: "#000a00",    // Barely perceptible green tint
    highlight: "#001a00",   // Dark green highlight
    selection: "#002800",   // Green selection
    hover: "#000f00",       // Subtle green hover
    inactive: "#000000",    // Pure black unfocused
    debug: "#001a12",       // Dark green debug toolbar
  },

  // ==========================================================================
  // FOREGROUND / TEXT COLORS
  // ==========================================================================
  fg: {
    base: "#33ff00",        // P39 phosphor green - primary text
    muted: "#28cc00",       // Muted green for sidebar
    dimmed: "#1a8000",      // Dim green for line numbers
    bright: "#50ff20",      // Bright green
    soft: "#30e000",        // Soft green for hints
    inactive: "#156000",    // Dark green inactive
  },

  // ==========================================================================
  // ACCENT COLORS
  // ==========================================================================
  accent: {
    primary: "#33ff00",     // P39 phosphor green
    secondary: "#40ff10",   // Bright green
    pink: "#20e000",        // Slightly muted (warm)
    hotPink: "#50ff30",     // Bright green for status
    magenta: "#30ff10",     // Warm green
  },

  // ==========================================================================
  // SYNTAX HIGHLIGHTING
  // Monochromatic green - using intensity for differentiation
  // ==========================================================================
  syntax: {
    function: "#50ff30",    // Bright green - functions stand out
    type: "#33ff00",        // Standard P39 - types
    string: "#20e000",      // Slightly muted - strings distinct
    builtin: "#45ff20",     // Bright green - builtins
    keyword: "#a0ffa0",     // Pale green - keywords prominent
    storage: "#30ff10",     // Warm green
    namespace: "#28cc00",   // Muted green
    attribute: "#40ff20",   // Bright green
    comment: "#1a7000",     // Dark muted - comments recede
    punctuation: "#208000", // Muted green
    property: "#40ff10",    // Bright green
    constant: "#60ff40",    // Very bright - constants pop
    number: "#45ff25",      // Bright green
    escape: "#10cc00",      // Darker - escapes visible
    invalid: "#104000",     // Very dark green
    error: "#ff3333",       // Red for errors (needs visibility)
  },

  // ==========================================================================
  // UI STATE COLORS
  // ==========================================================================
  state: {
    error: "#ff3333",       // Red (needs contrast)
    errorBg: "#1a0000",     // Dark red background
    warning: "#50ff30",     // Bright green
    info: "#33ff00",        // Standard green
    hint: "#28cc00",        // Muted green
    success: "#50ff30",     // Bright green
    added: "#001a00",       // Dark green
    deleted: "#1a0000",     // Dark red
    modified: "#40ff10",    // Green
  },

  // ==========================================================================
  // TERMINAL ANSI COLORS
  // Green monochrome - maps all colors to green spectrum
  // ==========================================================================
  terminal: {
    black: "#000000",
    red: "#ff3333",         // Keep red for visibility
    green: "#50ff30",       // Bright green
    yellow: "#70ff50",      // Very bright green
    blue: "#28cc00",        // Muted green as "blue"
    magenta: "#20e000",     // Muted green
    cyan: "#40ff20",        // Bright green
    white: "#33ff00",       // Standard P39
    brightBlack: "#156000",
    brightRed: "#ff6666",
    brightGreen: "#70ff50",
    brightYellow: "#90ff70",
    brightBlue: "#30e000",
    brightMagenta: "#40ff30",
    brightCyan: "#60ff40",
    brightWhite: "#80ff60",
  },

  // ==========================================================================
  // SPECIAL COLORS
  // ==========================================================================
  special: {
    cursor: "#33ff00",      // P39 phosphor cursor
    link: "#45ff20",        // Bright green links
    linkActive: "#60ff40",  // Very bright on hover
    console: "#20e000",     // Muted green console
    debugToken: "#40ff20",
    errorToken: "#ff3333",
    infoToken: "#33ff00",
    warnToken: "#50ff30",
  },
};
